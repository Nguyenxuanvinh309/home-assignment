/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useRouteError } from 'react-router'

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as unknown | any;  

  return (
    <div className="h-full w-full">
      <div className="text-center">
        <p className="text-8xl mb-1 text-primary font-bold">
          {error?.statusCode?.toString() || '404'}
        </p>
        <p className="text-2xl text-primary">{error?.message || 'お探しのページが見つかりませんでした トップから再度お試しください!'}</p>
        <button className="text-white min-w-[200px] min-h-[50px] bg-primary hover:border-primary-9 hover:bg-white hover:text-primary" onClick={() => navigate('/')}>
          トップに戻る
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
