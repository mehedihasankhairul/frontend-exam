const TextFiled = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="mb-2 text-base font-semibold text-gray-800">{label}</label>
    <input className="bg-gray-200 py-2 px-3 border-2 outline-none" {...props} />
  </div>
);

export default TextFiled;
