import { CardProps } from "@/lib/definitions";

export default function SubCard({ title, body, dateUpdate }: CardProps) {
    return (
        <div className="border-tavo-border flex 2xl:h-314 lg:h-380 md:h-250 h-300 w-full flex-col justify-between rounded-xl border-1 p-16 xl:w-368">
            <div>
                <h2 className="text-tavo-light mb-18 text-[32px] font-black uppercase">
                    {title}
                </h2>
                <p className="mb-10 text-xs text-white">{body}</p>
            </div>
            <p className="text-[10px] text-white">{dateUpdate}</p>
        </div>
    );
}
