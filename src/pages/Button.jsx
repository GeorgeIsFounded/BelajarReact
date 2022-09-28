export default function Button({
    title,
    disabled = false,
    bg = "",

    ...props
}) {
    return (
        <button
            {...props}
            disabled={disabled}
            style={{
                backgroundColor: bg,
                opacity: disabled ? 0.8 : 1
            }}
            className={`w-full border-black border mt-1 text-black px-5 py-2 rounded-md`}
        >
            {title}
        </button>
    );
}