import { getNavMenu, getInfo } from "@/lib/data";
import Image from "next/image";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/client-header";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default async function Page() {
    const image01 = "/images/logo_tavola_colo_02_dark.svg";
    const image01ALT = "Logo Tavola";
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
                <Carousel className="max-w-8xl h-625 w-full">
                    <CarouselContent className="h-full">
                        {imageCarousel.map((urlImage, index) => (
                            <CarouselItem
                                key={index}
                                className="h-full md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full p-1">
                                    <Card className="h-full">
                                        <CardContent className="h-625 w-472">
                                            <Image src={urlImage} alt="Image" fill/>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
            <Footer
                listMenu={menuNav}
                imageSrc={image01}
                imageAlt={image01ALT}
                openHours={hoursInfo}
            />
        </main>
    );
}
