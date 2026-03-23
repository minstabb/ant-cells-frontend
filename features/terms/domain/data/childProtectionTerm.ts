import { Term } from '../model/term';

export const childProtectionTerm: Term = {
  type: 'CHILD_PROTECTION',
  title: '아동 보호 정책',
  requirement: 'REQUIRED',
  detailUrl: '/terms/child-protection',
  isConditional: true,
  sections: [
    {
      title: '제 1 조 (목적)',
      content: [
        '본 정책은 만 14세 미만 아동의 개인정보 보호를 위한 특별 규정을 정합니다.',
        'Ant-Cells는 아동의 개인정보를 보호하기 위해 관련 법령을 준수합니다.',
      ],
    },
    {
      title: '제 2 조 (법정대리인의 동의)',
      content: [
        '만 14세 미만 아동이 서비스를 이용하려면 법정대리인(부모 또는 후견인)의 동의가 필요합니다.',
        '법정대리인은 아동의 개인정보 조회, 수정, 삭제를 요청할 수 있습니다.',
      ],
    },
    {
      title: '제 3 조 (아동 개인정보의 처리)',
      content: [
        '아동의 개인정보는 법정대리인의 동의 없이 수집, 이용, 제공되지 않습니다.',
        '아동의 개인정보는 서비스 제공 목적 외에 사용되지 않습니다.',
      ],
    },
  ],
};
