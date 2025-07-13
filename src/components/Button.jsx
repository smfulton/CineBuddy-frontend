const Button = ({ children, ...props }) => (
  <button
    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
    {...props}
  >
    {children}
  </button>
);

export default Button;
