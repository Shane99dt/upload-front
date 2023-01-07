const Button = ({ type, label, className }) => {
  return (
    <button
      type={type}
      className={`text-gray-200 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${className}`}
    >
      {label ? label : "Submit"}
    </button>
  );
};

export default Button;
