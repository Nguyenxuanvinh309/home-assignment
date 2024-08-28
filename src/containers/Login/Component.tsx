import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  InputForm,
  Loading
} from '../../components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import schema, { Type } from "./models/schema";

const Component = () => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
  } = useForm<Type>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: ''
    },
    mode: 'onBlur'
  })
  const onSubmit: SubmitHandler<Type> = (data) => console.log(data)
  
  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center h-screen">
        <div className="p-6 bg-white max-w-[448px] w-full m-auto md:shadow-md md:rounded-lg">
          <p className="text-primary text-2xl">{t('global:login.title')}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              />
            </div>
          </form>
          {/* <Loading /> */}
        </div>
      </div>
    </div>
  );
};
export default Component;