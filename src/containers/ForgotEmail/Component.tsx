import { SubmitHandler } from "react-hook-form";
import {
  Loading
} from '../../components';
import { useTranslation } from 'react-i18next';
import { ForgotEmailType } from "./model/schema";
import { forgotRequest } from './action';
import forgotEmailStore from "./store";
import "./style.css";
import Form from "./Form";
import { Link } from "react-router-dom";

const Component = () => {
  const loading = forgotEmailStore((state) => state.loading);
  const error = forgotEmailStore((state) => state.error);
  const data = forgotEmailStore((state) => state.data);
  const updateLoading = forgotEmailStore((state) => state.updateLoading);
  const updateError = forgotEmailStore((state) => state.updateError);
  const updateData = forgotEmailStore((state) => state.updateData);
  const resetStore = forgotEmailStore((state) => state.reset);
  const { t } = useTranslation();

  const handleSubmit: SubmitHandler<ForgotEmailType> = (data) => {
    resetStore();
    updateLoading(true);
    forgotRequest(data)?.then((e) => {
      if (e?.code !== 200) {
        updateError(e);
        updateLoading(false);
      } else {
        updateData(e);
        updateLoading(false);
      }
    })?.catch((error) => {
      updateError(error);
      updateLoading(false);
    });
  };

  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center justify-center h-screen">
        {
          data?.code === 200 ? (
            <div className="flex justify-center items-center flex-col min-h-[242px] slide-up decoration-coloum">
              <p className="text-3xl">We will try to email you <span className="font-bold">
                {data?.params?.firstName && data?.params?.firstName}{data?.params?.lastName && data?.params?.lastName}</span>...
              </p>
            </div>
          ) : (
            <div className={`${[
              "relative slide-down md:flex justify-center items-center overflow-hidden p-6 bg-white max-w-[680px] min-h-[290px] box-border w-full m-auto md:shadow-md md:rounded-lg"].join(' ')}`}>
                {/* Left Side */}
                <div className="w-full border-solid border-t-0 border-r-0 md:border-r-[1px] md:border-b-0 border-l-0 border-primary md:pr-[15px] md:min-h-[290px]">
                  <div className="text-center text-sm">
                    <h2>{t('global:forgottenEmailTitle')}</h2>
                    <p>{t('global:forgottenEmailDescription')}</p>
                  </div>
                </div>
    
                {/* Right Side */}
                <div className="w-full md:pl-[15px] text-center">
                  <>
                    <p className="text-primary text-2xl">{t('global:forgottenEmail')}</p>
                    <Form 
                      loading={loading}
                      onSubmit={handleSubmit}
                      defaultValues={{
                        firstName: '',
                        lastName: ''
                      }}
                    />
                    <div className="mt-[5px]">
                      <Link to="/" className="text-primary hover:text-primary hover:underline">{t('global:login.title')}</Link>
                    </div>
                  </>
                  {
                    error?.message && <p className="text-red-500">{error?.message}!!!</p>
                  }
                </div>
                {loading && <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 bg-[#0000001f] z-0"><Loading /></div>}
            </div>
          )
        }
      </div>
    </div>
  );
};
export default Component;