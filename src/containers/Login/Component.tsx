import { SubmitHandler } from "react-hook-form";
import {
  Loading
} from '@/components';
import { useTranslation } from 'react-i18next';
import { LoginType } from "./model/schema";
import { loginRequest } from './action';
import loginStore from "./store";
import "./style.css";
import Form from "./Form";

const Component = () => {
  const loading = loginStore((state) => state.loading);
  const error = loginStore((state) => state.error);
  const data = loginStore((state) => state.data);
  const updateLoading = loginStore((state) => state.updateLoading);
  const updateError = loginStore((state) => state.updateError);
  const updateData = loginStore((state) => state.updateData);
  const resetStore = loginStore((state) => state.reset);
  const { t } = useTranslation();

  const handleSubmit: SubmitHandler<LoginType> = (data) => {
    resetStore();
    updateLoading(true);
    loginRequest({
      email: encodeURIComponent(data?.email),
    })?.then((e) => {
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
    });;
  };

  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center justify-center h-screen">
        {data?.code === 200 ?
          <div className="flex justify-center items-center flex-col min-h-[242px] slide-up decoration-coloum">
            <p className="text-3xl">Welcome back, <span className="font-bold">
              {data?.params?.email && decodeURIComponent(data?.params?.email)}</span>!
            </p>
          </div> : (
            <div className={`${[
              "relative slide-down overflow-hidden p-6 bg-white max-w-[448px] min-h-[290px] box-border w-full m-auto md:shadow-md md:rounded-lg"].join(' ')}`}>
              <div className="z-0">
                <>
                  <p className="text-primary text-2xl">{t('global:login.title')}</p>
                  <Form 
                    loading={loading}
                    onSubmit={handleSubmit}
                    defaultValues={{
                      email: ''
                    }}
                  />
                  <div className="mt-[5px]">
                    <a href="/forgot-email" className="text-primary text-sm hover:text-primary hover:underline">{t('global:forgottenEmail')}</a>
                  </div>
                </>
                {
                  error?.message && <p className="text-red-500">{error?.message}!!!</p>
                }
              </div>
              {loading && <div className="w-full h-full absolute flex items-center justify-center top-0 left-0 bg-[#0000001f] z-0"><Loading /></div>}
            </div>
        )}
      </div>
    </div>
  );
};
export default Component;