import { CardProps } from "@/lib/definitions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MainCard({ title, body, dateUpdate }: CardProps) {
    return (
        <div className="bg-tavo-light flex size-full flex-col items-start justify-between rounded-xl p-28 lg:w-10/12 xl:h-[26.5rem] 2xl:h-[23.875rem]">
            <div className="focus-within:border-ring focus-within:ring-ring flex flex-col items-start focus-within:ring-[3px] focus-within:outline-none">
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
                <hr className="bg-tavo-gray my-10 h-2 w-full md:my-18" />
                <p className="text-tavo-gray pb-4 text-xs md:pb-0 md:text-sm">
                    {dateUpdate}
                </p>
            </div>
            <Button asChild>
                <Link className="stretched-link" href="/restaurant">
                    Learn More
                </Link>
            </Button>
        </div>
    );
}
