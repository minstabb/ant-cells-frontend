'use client';

import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { authAtom } from '@/features/auth/application/atoms/authAtom';
import { acceptedTermsAtom } from '@/features/terms/application/atoms/acceptedTermsAtom';

export default function SignupPage() {
  const authState = useAtomValue(authAtom);
  const acceptedTerms = useAtomValue(acceptedTermsAtom);
  const router = useRouter();

  useEffect(() => {
    if (authState.status === 'LOADING') return;
    if (authState.status !== 'TEMPORARY_AUTH') {
      router.replace('/login');
      return;
    }
    if (acceptedTerms.length === 0) {
      router.replace('/terms');
    }
  }, [authState.status, acceptedTerms, router]);

  if (authState.status !== 'TEMPORARY_AUTH' || acceptedTerms.length === 0) {
    return null;
  }

  const { user } = authState;

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-4 pt-12 dark:bg-zinc-950">
      <div className="w-full max-w-sm rounded-2xl bg-white px-8 py-10 shadow-md dark:bg-zinc-900">
        <h1 className="mb-8 text-center text-2xl font-bold text-zinc-900 dark:text-white">
          회원가입
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              이메일
            </label>
            <input
              type="email"
              readOnly
              defaultValue={user.email}
              className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              닉네임
            </label>
            <input
              type="text"
              defaultValue={user.nickname}
              className="rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            />
          </div>
          <button className="mt-2 w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}
