import { AxiosResponse } from 'axios';
import ApiInstance from '../../../utils/api';
import { LoginType } from '../model/schema';

class AuthService extends ApiInstance {
  constructor(protected apiUrl: string) {
    super(apiUrl);
  }

  login = (params: LoginType & {
    pass: string
  }): Promise<AxiosResponse> => {
    return this.get(`/basic-auth/${params?.email}/${params?.pass}`);
  };
}

const service = new AuthService('');
export default service;
