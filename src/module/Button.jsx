export default function Button({
  title,
  disabled = false,
  bg = "red",
  
  ...props
}) {
  return (
    <button
      {...props}
      disabled={disabled}
      style ={{
        backgroundColor  : bg,
        opacity : disabled ? 0.8 : 1
      }}
      className={`w-28 mt-1 text-white py-1 rounded-xl`}
    >
      {title}
    </button>
  );
}
