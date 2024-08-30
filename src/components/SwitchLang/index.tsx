import { useTranslation } from "react-i18next";
import { LANG_OPTIONS } from "../../utils/constants";
import Helper from "../../utils/helpers";

export default function SwitchLanguage() {
  const { i18n } = useTranslation();
  const currentLang = Helper.getLang();

  return (
    <div className="flex absolute right-[10px] top-[10px] bg-gray-400 rounded-lg overflow-hidden">
      {
        LANG_OPTIONS.map(item => 
        <span 
          key={item?.value}
          className={`${[
            `${currentLang === item?.value ? 'bg-primary text-white' : ''}`,
            'cursor-pointer py-1 px-2 text-[14px]'
          ].join(' ')}`}
          onClick={() => {
            i18n.changeLanguage(item?.value);
          }}>
            {item?.label}
          </span>
        )
      }
    </div>
  );
};