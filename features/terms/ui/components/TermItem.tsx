import Link from 'next/link';
import { Term } from '@/features/terms/domain/model/term';
import { termsPageStyles } from '@/features/terms/ui/termsPageStyles';

interface TermItemProps {
  term: Term;
}

export default function TermItem({ term }: TermItemProps) {
  return (
    <div className={termsPageStyles.termItem}>
      <div className={termsPageStyles.termLeft}>
        <span className={termsPageStyles.termTitle}>{term.title}</span>
      </div>
      <div className={termsPageStyles.termRight}>
        <span
          className={
            term.requirement === 'REQUIRED'
              ? termsPageStyles.requiredBadge
              : termsPageStyles.optionalBadge
          }
        >
          {term.requirement === 'REQUIRED' ? '필수' : '선택'}
        </span>
        <Link href={term.detailUrl} className={termsPageStyles.detailLink}>
          보기
        </Link>
      </div>
    </div>
  );
}
