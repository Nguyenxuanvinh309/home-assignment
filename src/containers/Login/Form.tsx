import { useTranslation } from 'react-i18next';
import {
  Button,
  InputForm,
} from '@/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import schema, { LoginType } from './model/schema';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
  loading: boolean,
  onSubmit: SubmitHandler<LoginType>,
  defaultValues: LoginType
}

const Form = ({
  onSubmit,
  loading,
  defaultValues
}: Props) => {
  const {
    control,
    handleSubmit,
  } = useForm<LoginType>({
    resolver: yupResolver(schema),
    defaultValues,
    mode: 'onBlur'
  });
  const { t } = useTranslation();

  return (
    <>
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
            disabled={loading}
          />
        </div>
      </form>
    </>
  );
};
export default Form;