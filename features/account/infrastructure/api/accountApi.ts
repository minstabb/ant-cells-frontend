import { httpClient } from '@/infrastructure/http/httpClient';
import { SignupRequest } from '../../domain/model/signupRequest';

export const accountApi = {
  signup: (body: SignupRequest) => httpClient.post('/account/sign-up', body),
};
