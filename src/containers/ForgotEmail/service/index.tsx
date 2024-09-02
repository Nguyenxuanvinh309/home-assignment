import { AxiosResponse } from 'axios';
import ApiInstance from '@/utils/api';
import { ForgotEmailType } from '@/containers/ForgotEmail/model/schema';

class ForgotEmailService extends ApiInstance {
  constructor(protected apiUrl: string) {
    super(apiUrl);
  }

  forgotEmailType = (params: ForgotEmailType): Promise<AxiosResponse> => {
    return this.post(`/post`, {
      params
    });
  };
}

const service = new ForgotEmailService('');
export default service;
