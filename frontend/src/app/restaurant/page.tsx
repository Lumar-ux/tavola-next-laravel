import { getNavMenu, getInfo, getMenu } from "@/lib/data";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/client-header";

export default async function Page() {
    const image01 = "/images/logo_tavola_colo_02_dark.svg";
    const image01ALT = "Logo Tavola";
    const hoursInfo = await getInfo();
    const menuNav = await getNavMenu();
    const menu = await getMenu();
    return (
        <main className="flex flex-1 flex-col">
            <Header listMenu={menuNav} />
            <section className="flex h-fit w-full flex-col items-center py-83">
                <h1 className="text-tavo-dark mb-55 w-fit text-7xl font-black uppercase">
                    {menu.mainTitre}
                </h1>
                <div className="flex flex-col items-center">
                    {menu.categories.map((cat, id) => (
                        <>
                            <h2
                                key={id}
                                className="text-tavo-dark text-2xl font-black uppercase"
                            >
                                {cat.titre}
                            </h2>
                            <ul className="mb-50 last:mb-0">
                                {cat.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-tavo-dark mb-8 flex flex-col sm:mb-6 sm:flex-row"
                                    >
                                        <h3 className="inline-block pr-6 text-xs font-bold md:text-sm lg:text-base">
                                            {item.nom}:
                                        </h3>
                                        <div className="flex flex-col sm:flex-row">
                                            {item.description && (
                                                <p className="flex-1 pr-8 text-xs md:pr-12 md:text-sm lg:pr-18 lg:text-base">
                                                    {item.description}
                                                </p>
                                            )}
                                            {item.prix.length == 2 ? (
                                                <div className="flex gap-8">
                                                    <p className="bg-tavo-dark text-tavo-light w-fit rounded-[6px] px-10 py-4 text-xs leading-none sm:px-18 md:text-sm lg:text-base">
                                                        {item.prix[0]} € (Verre)
                                                    </p>
                                                    <p className="bg-tavo-dark text-tavo-light w-fit rounded-[6px] px-10 py-4 text-xs leading-none sm:px-18 md:text-sm lg:text-base">
                                                        {item.prix[1]} €
                                                        (Bouteille)
                                                    </p>
                                                </div>
                                            ) : (
                                                <p className="bg-tavo-dark text-tavo-light h-fit w-fit rounded-[6px] px-10 py-4 text-xs leading-none sm:px-18 md:text-sm lg:text-base">
                                                    {item.prix[0]} €
                                                </p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </>
                    ))}
                </div>
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
