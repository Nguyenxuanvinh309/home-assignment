import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  InputForm,
  Loading
} from '../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import schema, { LoginType } from "./model/schema";
import { loginRequest } from './action';
import loginStore from "./store";

const Component = () => {
  const loading = loginStore((state) => state.loading);
  const updateLoading = loginStore((state) => state.updateLoading);
  const resetStore = loginStore((state) => state.reset);
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: ''
    },
    mode: 'onBlur'
  });
  const onSubmit: SubmitHandler<LoginType > = (data) => {
    updateLoading(true);
    loginRequest({
      email: encodeURIComponent(data?.email),
      pass: '1234567890'
    })?.catch(() => {
      resetStore();
    });
  };

  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center h-screen">
        <div className={`${[
          loading ? "flex justify-center items-center" : '',
          "p-6 bg-white max-w-[448px] min-h-[290px] box-border w-full m-auto md:shadow-md md:rounded-lg"].join(' ')}`}>
          {loading ? <div><Loading /></div> : (
            <>
              <p className="text-primary text-2xl">{t('global:login.title')}</p>
              <form onSubmit={handleSubmit(onSubmit)} action="https://httpbin.org/basic-auth">
                <InputForm 
                  name="email" 
                  control={control} 
                  label={t('global:email')}
                  onClick={() => {}}
                  placeholder={t('global:email')}
                  required
                  size="large"
                  variant="default"
                />
                <div className='mt-[20px]'>
                  <Button 
                    label={t('global:send')} 
                    size="large"
                    disabled={loading}
                  />
                </div>
              </form>
              <div className="mt-[5px]">
                <a href="#" className="text-primary hover:text-primary hover:underline">{t('global:forgottenEmail')}</a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Component;