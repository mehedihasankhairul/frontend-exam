const Button = ({ children, ...props }) => (
  <button className="bg-indigo-600 text-white py-2 px-6 my-5 rounded hover:bg-indigo-700" {...props}>
    {children}
  </button>
);

export default Button;
