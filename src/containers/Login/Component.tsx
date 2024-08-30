import { SubmitHandler } from "react-hook-form";
import {
  Button,
  Loading
} from '../../components';
import { useTranslation } from 'react-i18next';
import { LoginType } from "./model/schema";
import { loginRequest } from './action';
import loginStore from "./store";
import "./style.css";
import Helper from "../../utils/helpers";
import { OP_DATA } from "../../utils/constants";
import { useEffect } from "react";
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
  const token = Helper.getAuthToken();
  const opData = Helper.getDataStored(OP_DATA);

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

  // Handle Log out
  const handleLogout = () => {
    updateLoading(true);
    
    setTimeout(() => {
      Helper.removeAuthToken();
      Helper.remoteStoreData(OP_DATA);
      resetStore();
    }, 100);
  };

  useEffect(() => {
    if (opData) updateData(JSON.parse(opData));
  }, [opData, updateData]);

  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center h-screen">
        <div className={`${[
          loading ? "flex justify-center items-center" : '',
          "overflow-hidden p-6 bg-white max-w-[448px] min-h-[290px] box-border w-full m-auto md:shadow-md md:rounded-lg"].join(' ')}`}>
          {loading ? <div><Loading /></div> : (
            <>
              {
                token ? (
                  <div className="flex justify-center items-center flex-col min-h-[242px] slide-up decoration-coloum">
                    <p className="text-xl">Welcome back, <span className="font-bold">
                      {data?.params?.email && decodeURIComponent(data?.params?.email)}</span>!
                    </p>
                    <Button 
                      label={t('global:logout')} 
                      size="large"
                      primary={false}
                      onClick={handleLogout}
                    />
                  </div>
                ) : (
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
                )
              }
              {
                error?.message && <p className="text-red-500">{error?.message}!!!</p>
              }
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Component;