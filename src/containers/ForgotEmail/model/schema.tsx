import { InferType, object, string } from 'yup';
import { t } from '../../../i18n';

const schema = object({
  firstName: string()
    .trim()
    .required(t('validation:requiredField')),
  lastName: string()
    .trim()
    .required(t('validation:requiredField')), 
});

export default schema;
export type ForgotEmailType = InferType<typeof schema>;