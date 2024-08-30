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
import AuthIcon from '../../assets/icon-auth.png';

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

  console.log(data?.code);
  return (
    <div className="h-full w-full bg-white md:bg-[transparent]">
      <div className="flex text-center h-screen">
        <div className={`${[
          "md:flex justify-center items-center overflow-hidden p-6 bg-white max-w-[680px] min-h-[290px] box-border w-full m-auto md:shadow-md md:rounded-lg"].join(' ')}`}>
            {/* Left Side */}
            <div className="hidden md:block w-2/3 md:pr-[15px] min-h-[290px]">
              <div className="text-left text-sm">
                <img src={AuthIcon} alt="" className="w-full" />
                <p>{t('global:forgottenEmailDescription')}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:pl-[15px] text-center">
              {loading ? <div className="flex justify-center"><Loading /></div> : (
                <>
                  {
                    data?.code === 200 ? (
                      <div className="flex justify-center items-center flex-col min-h-[242px] slide-up decoration-coloum">
                        <p className="text-xl">We will try to email you <span className="font-bold">
                          {data?.params?.firstName && data?.params?.firstName}{data?.params?.lastName && data?.params?.lastName}</span>...
                        </p>
                      </div>
                    ) : (
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
    </div>
  );
};
export default Component;