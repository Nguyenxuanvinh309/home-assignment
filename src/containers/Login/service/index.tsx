import { AxiosResponse } from 'axios';
import ApiInstance from '@/utils/api';
import { LoginType } from '@/containers/Login/model/schema';

class AuthService extends ApiInstance {
  constructor(protected apiUrl: string) {
    super(apiUrl);
  }

  login = (params: LoginType): Promise<AxiosResponse> => {
    return this.post(`/post`, {
      params
    });
  };
}

const service = new AuthService('');
export default service;
