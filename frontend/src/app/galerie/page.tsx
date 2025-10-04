import { getNavMenu, getInfo } from "@/lib/data";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Page() {
    const hoursInfo = await getInfo();
    const menuNav = await getNavMenu();
    const imageCarousel: Array<string> = [
        "/images/image_01.jpg",
        "/images/image_02.jpg",
        "/images/image_03.jpg",
        "/images/image_04.jpg",
        "/images/image_05.jpg",
        "/images/image_06.jpg",
        "/images/image_07.jpg",
        "/images/image_08.jpg",
        "/images/image_09.jpg",
    ];
    return (
        <main className="h-100vh flex flex-1 flex-col">
            <Header listMenu={menuNav} />
            <section className="my-83 flex-1 justify-center">
                <h1 className="text-tavo-dark mb-48 inline-block text-7xl font-black uppercase">
                    Galerie
                </h1>
                <article className="flex w-full flex-col items-center">
                    <Carousel className="relative h-625 w-full max-w-7xl">
                        <CarouselContent>
                            {imageCarousel.map((imgUrl, i) => (
                                <CarouselItem
                                    key={i}
                                    className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="p-4">
                                        <Card>
                                            <CardContent className="relative flex h-625 w-full">
                                                <Image
                                                    src={imgUrl}
                                                    alt={`Image 0${i + 1} de la galerie`}
                                                    fill
                                                    className="rounded-xl object-cover"
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </article>
            </section>
            <Footer listMenu={menuNav} openHours={hoursInfo} />
        </main>
    );
}
