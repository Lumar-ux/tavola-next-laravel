export default function Button({ text }: { text: string }) {
    return (
        <button className="text-tavo-dark border-tavo-dark hover:border-tavo-hover-dark hover:text-tavo-hover-dark w-fit rounded-[6px] border-2 px-8 py-4 text-base font-bold transition-colors duration-300 md:text-lg">
            {text}
        </button>
    );
}
