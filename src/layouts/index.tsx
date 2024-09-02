import SwitchLanguage from '@/components/SwitchLang';

const Layout = ({
  children
}: {
  children: JSX.Element
}) => {
  return (
    <div className="relative">
      <SwitchLanguage />
      {children}
    </div>
  );
};
export default Layout;