import { getArticle, getMenu, getInfo } from "@/lib/data";
import Footer from "@/ui/components/footer";
import Header from "@/ui/components/client-header";
import SubCard from "@/ui/components/sub-card";
import MainCard from "@/ui/components/main-card";
import Image from "next/image";

export default async function Home() {
    const image01 = "/logo_tavola_colo_02_dark.svg";
    const image01ALT = "Logo Tavola";
    const image02 = "/images/benu-marinescu_homeimage.jpg";
    const image03 = "/images/bg-damier_01.svg";
    const firtArticle = await getArticle("1");
    const article = await getArticle();
    const menu = await getMenu();
    const hoursInfo = await getInfo();
    return (
        <main className="flex flex-1 flex-col">
            <Header listMenu={menu} />
            <section className="flex h-fit flex-col justify-between gap-32 overflow-y-auto py-28 md:flex-row md:items-start md:py-83">
                <article className="relative flex h-full max-w-[39rem] min-w-[9rem] flex-col items-center justify-between md:items-start">
                    <Image
                        src={image01}
                        alt={image01ALT}
                        width={623.8}
                        height={189.81}
                        className="h-auto w-[9rem] rounded-xl object-cover pb-16 md:w-full md:pb-0"
                    />
                    <p className="text-tavo-dark text-15">
                        {firtArticle[0].body}
                    </p>
                </article>
                <article className="w-full shrink md:size-fit">
                    <Image
                        src={image02}
                        alt="Logo Tavola"
                        height={559}
                        width={372}
                        className="aspect-square size-full rounded-xl object-cover md:aspect-auto md:h-[35rem] md:w-auto"
                    />
                </article>
            </section>
            <section className="relative -mx-48 w-svw h-80 md:h-80 xl:-mx-200">
                <Image
                    src={image03}
                    alt="Transition image d'un damier"
                    fill
                    sizes="100vw"
                    className="z-10 object-cover"
                />
            </section>
            <section className="relative flex flex-col gap-16 py-48 md:py-83">
                <div className="bg-tavo-dark pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-screen -translate-x-1/2" />
                <h1 className="text-tavo-light text-7xl font-black uppercase">
                    Event/news
                </h1>
                {article.slice(1, 2).map((item) => (
                    <MainCard
                        key={item.id}
                        title={item.title}
                        body={item.body}
                        dateUpdate={item.updated_at}
                    />
                ))}
                <article className="flex flex-col gap-16 lg:flex-row">
                    {article.slice(2).map((item) => (
                        <SubCard
                            key={item.id}
                            title={item.title}
                            body={item.body}
                            dateUpdate={item.updated_at}
                        />
                    ))}
                </article>
            </section>
            <Footer
                listMenu={menu}
                imageSrc={image01}
                imageAlt={image01ALT}
                openHours={hoursInfo}
            />
        </main>
    );
}
