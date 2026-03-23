'use client';

import { useAtom, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { TermType } from '@/features/terms/domain/model/term';
import { termConsentAtom } from '@/features/terms/application/atoms/termConsentAtom';
import { acceptedTermsAtom } from '@/features/terms/application/atoms/acceptedTermsAtom';
import { getVisibleTerms } from '@/features/terms/application/queries/termQuery';

export function useTermConsent(showConditionalTerms: boolean) {
  const [checkedTypes, setCheckedTypes] = useAtom(termConsentAtom);
  const setAcceptedTerms = useSetAtom(acceptedTermsAtom);
  const visibleTerms = getVisibleTerms(showConditionalTerms);
  const requiredTerms = visibleTerms.filter((t) => t.requirement === 'REQUIRED');

  const isAllChecked = visibleTerms.length > 0 && visibleTerms.every((t) => checkedTypes.has(t.type));
  const areAllRequiredChecked = requiredTerms.every((t) => checkedTypes.has(t.type));

  const toggle = useCallback(
    (type: TermType) => {
      setCheckedTypes((prev) => {
        const next = new Set(prev);
        if (next.has(type)) next.delete(type);
        else next.add(type);
        return next;
      });
    },
    [setCheckedTypes],
  );

  const toggleAll = useCallback(() => {
    if (isAllChecked) {
      setCheckedTypes(new Set());
    } else {
      setCheckedTypes(new Set(visibleTerms.map((t) => t.type)));
    }
  }, [isAllChecked, visibleTerms, setCheckedTypes]);

  const acceptTerms = useCallback(() => {
    setAcceptedTerms(Array.from(checkedTypes));
  }, [checkedTypes, setAcceptedTerms]);

  return { checkedTypes, visibleTerms, isAllChecked, areAllRequiredChecked, toggle, toggleAll, acceptTerms };
}
