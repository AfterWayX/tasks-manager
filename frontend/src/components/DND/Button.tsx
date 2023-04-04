interface ButtonProps {
    title: string;
    cb: () => void;
}
export default function Button({ title, cb }: ButtonProps) {
    return (
        <button
            onClick={cb}
            className="rounded-lg border border-gray-300 text-xs p-0.5"
        >
            {title}
        </button>
    )
}