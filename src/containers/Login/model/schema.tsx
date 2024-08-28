import { InferType, object, string } from 'yup';
import { REG_EXP } from '../../../utils/constants';
import { t } from '../../../i18n';

const schema = object({
  email: string()
    .trim()
    .required(t('validation:requiredField'))
    .lowercase().matches(REG_EXP.EMAIL, t('validation:invalidField')),
});

export default schema;
export type LoginType = InferType<typeof schema>;
