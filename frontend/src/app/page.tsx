import { getArticle } from "@/lib/data";
import Footer from "@/ui/components/footer";
import Header from "@/ui/components/client-header";
import Image from "next/image";

export default async function Home() {
    const image01 = "/logo_tavola_colo_02_dark.svg";
    const image02 = "/images/benu-marinescu_homeimage.jpg";
    const article = await getArticle(1);
    return (
        <main className="flex flex-1 flex-col">
            <Header />
            <section className="flex h-fit justify-between gap-32 overflow-y-auto py-83 sm:items-start">
                <article className="flex h-full max-w-631 flex-col justify-between">
                    <Image
                        src={image01}
                        alt="Logo Tavola"
                        height={192}
                        width={631}
                    />
                    <p className="text-tavo-dark text-15">{article[0].body}</p>
                </article>
                <article className="shrink">
                    <Image
                        src={image02}
                        alt="Logo Tavola"
                        height={559}
                        width={372}
                    />
                </article>
            </section>
            <Footer />
        </main>
    );
}
