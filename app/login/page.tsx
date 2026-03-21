import { env } from '@/infrastructure/config/env';
import { loginPageStyles } from './loginPageStyles';

const oauthProviders = [
  {
    label: 'Kakao로 로그인',
    href: `${env.apiBaseUrl}${env.kakaoLoginPath}`,
    color: 'bg-[#FEE500] text-[#3C1E1E]',
  },
];

export default function LoginPage() {
  return (
    <div className={loginPageStyles.container}>
      <div className={loginPageStyles.card}>
        <h1 className={loginPageStyles.title}>로그인</h1>
        <div className={loginPageStyles.buttonList}>
          {oauthProviders.map(({ label, href, color }) => (
            <a
              key={label}
              href={href}
              className={loginPageStyles.oauthButton(color)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
