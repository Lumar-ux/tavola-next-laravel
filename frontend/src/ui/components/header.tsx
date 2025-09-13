"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuType } from "@/lib/definitions";

export default function HeaderClient({data}: {data : menuType[]}) {
    const activePath = usePathname();
    return (
        <header className="relative h-195">
            <nav className="relative flex h-full justify-between items-center">
                <div className="bg-tavo-dark pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-screen -translate-x-1/2" />
                <ul className="text-tavo-light flex gap-16">
                    {data.map((item) => (
                        <li key={item.id}>
                            <Link href={item.url}>{item.value}</Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex gap-16">
                    <li>
                        <Image
                            src="./images/Instagram_light.svg"
                            alt="Logo instagram"
                            height={24}
                            width={24}
                        />
                    </li>
                    <li>
                        <Image
                            src="./images/Facebook_light.svg"
                            alt="Logo facebook"
                            height={24}
                            width={24}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
