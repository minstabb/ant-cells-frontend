import { Term } from '@/features/terms/domain/model/term';
import { TERMS_LIST } from '@/features/terms/domain/model/termList';

export function getTerms(): Term[] {
  return TERMS_LIST;
}

export function getVisibleTerms(showConditionalTerms: boolean): Term[] {
  return TERMS_LIST.filter(
    (term) => !term.isConditional || showConditionalTerms,
  );
}

export function getTermByType(type: Term['type']): Term | undefined {
  return TERMS_LIST.find((term) => term.type === type);
}
