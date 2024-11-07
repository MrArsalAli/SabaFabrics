function Button({ text, type, onClick, disabled }) {
  return (
    <>

    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="text-white bg-emerald-400 hover:bg-emerald-500 font-medium rounded-none text-sm w-full py-2.5"
    >
      {text}
    </button>
    </>
  );
}

export default Button;
