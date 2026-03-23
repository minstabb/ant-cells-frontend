import { atom } from 'jotai';
import { TermType } from '@/features/terms/domain/model/term';

export const acceptedTermsAtom = atom<TermType[]>([]);
