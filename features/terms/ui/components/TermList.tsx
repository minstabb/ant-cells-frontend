'use client';

import { termsPageStyles } from '@/features/terms/ui/termsPageStyles';
import { useTermConsent } from '@/features/terms/application/hooks/useTermConsent';
import TermItem from './TermItem';

interface TermListProps {
  showConditionalTerms: boolean;
}

export default function TermList({ showConditionalTerms }: TermListProps) {
  const { checkedTypes, visibleTerms, isAllChecked, toggle, toggleAll } =
    useTermConsent(showConditionalTerms);

  return (
    <div className={termsPageStyles.termList}>
      <div className={termsPageStyles.allAgreeRow}>
        <input
          type="checkbox"
          id="term-all"
          checked={isAllChecked}
          onChange={toggleAll}
          className={termsPageStyles.checkbox}
        />
        <label htmlFor="term-all" className={termsPageStyles.allAgreeLabel}>
          전체 동의
        </label>
      </div>
      <div className={termsPageStyles.divider} />
      {visibleTerms.map((term) => (
        <TermItem
          key={term.type}
          term={term}
          checked={checkedTypes.has(term.type)}
          onToggle={() => toggle(term.type)}
        />
      ))}
    </div>
  );
}
