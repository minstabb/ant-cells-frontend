import { atom } from 'jotai';
import { TermType } from '@/features/terms/domain/model/term';

export const termConsentAtom = atom<Set<TermType>>(new Set<TermType>());
