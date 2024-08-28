import {
  Input,
  Button
} from '../../components';
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  return (
    <div className="h-full w-full">
      <div className="text-center">
        <div className="p-6 bg-white max-w-md m-auto rounded-lg shadow-md">
          <p className="text-primary">This is Login</p>
          <Input
            label="Input"
            onClick={() => {}}
            placeholder="Input component"
            required
            size="large"
            variant="default"
          />
          <div className='mt-[20px]'>
            <Button 
              label={t('global:yes')} 
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;