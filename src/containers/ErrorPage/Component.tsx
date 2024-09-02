/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from 'react-i18next';
import { useNavigate, useRouteError } from 'react-router'

const Component = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const error = useRouteError() as unknown | any;  

  return (
    <div className="h-full w-full">
      <div className="text-center">
        <p className="text-8xl mb-1 text-primary font-bold">
          {error?.statusCode?.toString() || '404'}
        </p>
        <p className="text-2xl text-primary">{error?.message || t('global:notFoundDescription')}</p>
        <button className="text-white min-w-[200px] min-h-[50px] bg-primary hover:border-primary-9 hover:bg-white hover:text-primary" onClick={() => navigate('/')}>
          {t('global:backToTop')}
        </button>
      </div>
    </div>
  );
};

export default Component;
