import Link from 'next/link';
import { Term } from '@/features/terms/domain/model/term';
import { termsPageStyles } from '@/features/terms/ui/termsPageStyles';

interface TermItemProps {
  term: Term;
  checked: boolean;
  onToggle: () => void;
}

export default function TermItem({ term, checked, onToggle }: TermItemProps) {
  return (
    <div className={termsPageStyles.termItem}>
      <div className={termsPageStyles.termLeft}>
        <input
          type="checkbox"
          id={`term-${term.type}`}
          checked={checked}
          onChange={onToggle}
          className={termsPageStyles.checkbox}
        />
        <label
          htmlFor={`term-${term.type}`}
          className={termsPageStyles.termTitle}
        >
          {term.title}
        </label>
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
