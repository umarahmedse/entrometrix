const Divider = () => {
  return (
    <div className="w-auto py-20 dark:bg-gray-dark bg-white relative flex items-center mx-5 md:mx-20 ">
      {/* Line */}
      <hr className="w-full h-[1px] border-0 bg-gradient-to-r from-primary via-primary to-primary" />

      {/* Left Circle */}
      <div className="absolute left-0 w-5 h-5 rounded-full border-2 border-primary bg-white dark:bg-gray-dark"></div>

      {/* Right Circle */}
      <div className="absolute right-0 w-5 h-5 rounded-full border-2 border-primary bg-white dark:bg-gray-dark"></div>
    </div>
  );
};

export default Divider;
