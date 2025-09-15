import { CardProps } from "@/lib/definitions";
import Button from "@/ui/components/button";

export default function MainCard({ title, body, dateUpdate }: CardProps) {
    return (
        <div className="bg-tavo-light flex size-full flex-col justify-between rounded-xl p-28 lg:w-10/12 xl:h-[26.5rem] 2xl:h-[23.875rem]">
            <div>
                <h2
                    className={
                        "text-tavo-dark mb-18 text-4xl font-bold uppercase md:mb-32 md:text-5xl"
                    }
                >
                    {title}
                </h2>
                <p className="text-normal columns-1 gap-8 text-sm md:columns-2 md:text-base">
                    {body}
                </p>
                <hr className="my-10 h-2 bg-neutral-500 md:my-18" />
                <p className="pb-4 text-xs text-neutral-500 md:pb-0 md:text-sm">
                    {dateUpdate}
                </p>
            </div>
            <Button text="Learn More" />
        </div>
    );
}
