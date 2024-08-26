const Component = () => {
  return (
    <div className="h-full w-full">
      <div className="text-center">
        <div className="p-6 bg-white max-w-md m-auto rounded-lg shadow-md">
          <p className="text-primary">This is Login</p>
          <button className="text-white w-full bg-primary hover:border-primary-9 hover:bg-white hover:text-primary transition-[background]">
            Login
          </button>

          <button className="w-full bg-white border-primary-9 text-primary hover:border-primary-9 hover:bg-primary hover:text-white transition-[background] mt-[20px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Component;