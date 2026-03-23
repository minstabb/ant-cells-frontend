import { Term } from '../model/term';

export const privacyPolicyTerm: Term = {
  type: 'PRIVACY_POLICY',
  title: '개인정보처리방침',
  requirement: 'REQUIRED',
  detailUrl: '/terms/privacy-policy',
  isConditional: false,
  sections: [
    {
      title: '제 1 조 (목적)',
      content: [
        'Ant-Cells(이하 "서비스")는 이용자의 개인정보를 중요시하며, 개인정보 보호법 등 관련 법령을 준수합니다.',
        '본 방침은 서비스가 수집하는 개인정보의 항목, 수집 및 이용 목적, 보유 기간 등을 안내합니다.',
      ],
    },
    {
      title: '제 2 조 (수집하는 개인정보 항목)',
      content: [
        '필수 수집 항목: 이메일 주소, 닉네임',
        '자동 수집 항목: 서비스 이용 기록, 접속 로그, 접속 IP',
        'OAuth 연동 시 수집 항목: OAuth 제공자의 고유 식별자',
      ],
    },
    {
      title: '제 3 조 (개인정보의 수집 및 이용 목적)',
      content: [
        '회원 식별 및 서비스 제공',
        '서비스 부정 이용 방지 및 운영 관리',
        '서비스 개선 및 신규 기능 개발',
      ],
    },
    {
      title: '제 4 조 (개인정보의 보유 및 이용 기간)',
      content: [
        '회원 탈퇴 시 즉시 파기. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.',
        '전자상거래 기록: 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)',
        '접속 로그 기록: 3개월 (통신비밀보호법)',
      ],
    },
    {
      title: '제 5 조 (이용자의 권리)',
      content: [
        '이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제를 요청할 수 있습니다.',
        '개인정보 관련 문의: support@ant-cells.com',
      ],
    },
  ],
};
