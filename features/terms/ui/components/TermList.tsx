import { getVisibleTerms } from '@/features/terms/application/queries/termQuery';
import { termsPageStyles } from '@/features/terms/ui/termsPageStyles';
import TermItem from './TermItem';

interface TermListProps {
  showConditionalTerms: boolean;
}

export default function TermList({ showConditionalTerms }: TermListProps) {
  const visibleTerms = getVisibleTerms(showConditionalTerms);

  return (
    <div className={termsPageStyles.termList}>
      {visibleTerms.map((term) => (
        <TermItem key={term.type} term={term} />
      ))}
    </div>
  );
}
