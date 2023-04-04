interface ButtonProps {
    title: string;
    cb: () => void;
    classes?: string
}
export default function Button({ title, cb, classes = '' }: ButtonProps) {
    return (
        <button
            onClick={cb}
            className={"rounded-lg w-full border border-gray-300 text-xs px-1 py-0.5 transition-all " + classes}
        >
            {title}
        </button>
    )
}