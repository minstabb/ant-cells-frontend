export type TermType = 'PRIVACY_POLICY' | 'TERMS_OF_SERVICE' | 'CHILD_PROTECTION';

export type TermRequirement = 'REQUIRED' | 'OPTIONAL';

export interface TermSection {
  title: string;
  content: string[];
}

export interface Term {
  type: TermType;
  title: string;
  requirement: TermRequirement;
  detailUrl: string;
  isConditional: boolean;
  sections: TermSection[];
}
