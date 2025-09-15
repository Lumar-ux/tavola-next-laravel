import { InfoType, menuType } from "@/lib/definitions";
import Image from "next/image";

export default function Footer({
    imageSrc,
    imageAlt,
    listMenu,
    openHours,
}: {
    imageSrc: string;
    imageAlt: string;
    listMenu: menuType;
    openHours: InfoType[];
}) {
    const { bottomList } = listMenu;
    return (
        <footer className="grid h-195 w-full items-center justify-center gap-16">
            <nav className="relative flex h-full">
                {/* <div className="bg-tavo-light pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-screen -translate-x-1/2" /> */}
                <ul className="text-tavo-dark grid h-195 w-full grid-cols-12 grid-rows-4 items-end">
                    <li className="col-span-2 row-span-2 md:row-start-2 md:row-end-4">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            height={73.32}
                            width={239.79}
                        />
                    </li>
                    <li className="col-start-4 row-start-1 row-end-2">
                        <h3 className="col-span-2 text-xs leading-none font-bold uppercase md:text-[15px]">
                            {openHours[0]?.openHours.label}
                        </h3>
                    </li>
                    <li className="col-span-3 col-start-4 row-start-2 row-end-4 grid gap-4 md:gap-16 grid-cols-6">
                        {openHours.map((item, index) => (
                            <div
                                key={item.localisation ?? index}
                                className={`flex flex-row flex-nowrap md:flex-col ${index === 0 ? "col-start-1 col-end-4" : "col-start-4 col-end-7"}`}
                            >
                                <h4 className="text-xs uppercase lg:text-[15px]">
                                    {item.localisation}
                                </h4>
                                <p className="text-xs uppercase">
                                    {item.openHours.weekDays.days}
                                </p>
                                <p className="text-xs uppercase">
                                    {item.openHours.weekDays.hours}
                                </p>
                                <p className="text-xs uppercase">
                                    {item.openHours.weekend.days}
                                </p>
                                <p className="text-xs uppercase">
                                    {item.openHours.weekend.hours}
                                </p>
                            </div>
                        ))}
                    </li>
                    {bottomList.map((item, index, arr) => (
                        <li
                            key={item.id}
                            className={`row-start-1 row-end-2 text-sm leading-none lg:text-[15px] ${index === 0 ? "col-start-7" : "col-start-8"} ${index === arr.length - 1 ? "col-start-9" : ""}`}
                        >
                            <h3 className="font-bold uppercase">
                                {item.value}
                            </h3>
                        </li>
                    ))}
                    <li className="col-start-12 flex justify-end gap-16">
                        <Image
                            src="./images/Instagram_dark.svg"
                            alt="Logo instagram"
                            height={24}
                            width={24}
                        />
                        <Image
                            src="./images/Facebook_dark.svg"
                            alt="Logo facebook"
                            height={24}
                            width={24}
                        />
                    </li>
                </ul>
            </nav>
        </footer>
    );
}
