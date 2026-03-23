'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import TermList from '@/features/terms/ui/components/TermList';
import { termsPageStyles } from '@/features/terms/ui/termsPageStyles';

export default function TermsPage() {
  const authState = useAtomValue(authAtom);
  const router = useRouter();

  useEffect(() => {
    if (authState.status !== 'LOADING' && authState.status !== 'TEMPORARY_AUTH') {
      router.replace('/login');
    }
  }, [authState.status, router]);

  if (authState.status !== 'TEMPORARY_AUTH') {
    return null;
  }

  return (
    <div className={termsPageStyles.container}>
      <div className={termsPageStyles.card}>
        <h1 className={termsPageStyles.title}>약관 동의</h1>
        <TermList showConditionalTerms={false} />
      </div>
    </div>
  );
}
