import { useTranslation } from 'react-i18next';
import {
  Button,
  InputForm,
} from '@/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import schema, { ForgotEmailType } from './model/schema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  loading: boolean,
  onSubmit: SubmitHandler<ForgotEmailType>,
  defaultValues: ForgotEmailType
}

const Form = ({
  onSubmit,
  loading,
  defaultValues
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<ForgotEmailType>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur'
  });
  const { t } = useTranslation();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[20px]">
          <InputForm 
            name="firstName" 
            control={control} 
            label={t('global:name.firstName')}
            onClick={() => {}}
            placeholder={t('global:name.firstName')}
            required
            size="large"
            variant="default"
          />
        </div>
        <div>
          <InputForm 
            name="lastName" 
            control={control} 
            label={t('global:name.lasName')}
            onClick={() => {}}
            placeholder={t('global:name.lasName')}
            required
            size="large"
            variant="default"
          />
        </div>
        <div className='mt-[20px]'>
          <Button 
            label={t('global:send')} 
            size="large"
            disabled={loading}
          />
        </div>
      </form>
    </>
  );
};
export default Form;