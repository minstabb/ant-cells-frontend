import { env } from '@/infrastructure/config/env';
import KakaoLoginButton from '@/components/login/KakaoLoginButton';
import { loginPageStyles } from './loginPageStyles';

export default function LoginPage() {
  return (
    <div className={loginPageStyles.container}>
      <div className={loginPageStyles.card}>
        <h1 className={loginPageStyles.title}>로그인</h1>
        <div className={loginPageStyles.buttonList}>
          <KakaoLoginButton href={`${env.apiBaseUrl}${env.kakaoLoginPath}`} />
        </div>
      </div>
    </div>
  );
}
