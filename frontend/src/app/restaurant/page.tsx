import { getNavMenu, getInfo } from "@/lib/data";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default async function Page() {
    const Info = await getInfo();
    const menuNav = await getNavMenu();
    return (
        <main className="h-100vh flex w-full flex-1 flex-col">
            <Header listMenu={menuNav} />
            <section className="my-83 flex-1 justify-center">
                <h1 className="text-tavo-dark mb-48 inline-block text-7xl font-black uppercase">
                    restaurant
                </h1>
                {Info.map((Item, index) => (
                    <article key={index} className="flex flex-col lg:mb-0 nth-2:mb-93">
                        <h2 className="text-tavo-dark mb-8 text-5xl font-black uppercase">
                            {Item.localisation}
                        </h2>
                        <div className="flex flex-col lg:flex-row">
                            <div className="mr-16 w-220">
                                <p className="mb-16">{Item.address}</p>
                                <h3 className="font-bold mb-8">{Item.openHours.label}</h3>
                                <div className="mb-4">
                                    <p>{Item.openHours.weekDays.days}</p>
                                    <p>{Item.openHours.weekDays.hours}</p>
                                </div>
                                <div className="lg:mb-0 mb-16">
                                    <p>{Item.openHours.weekend.days}</p>
                                    <p>{Item.openHours.weekend.hours}</p>
                                </div>
                            </div>
                            <iframe
                                src={Item.srcIframe}
                                className="h-500 w-full rounded-lg border-0 lg:w-1000"
                                loading="lazy"
                            />
                        </div>
                    </article>
                ))}
            </section>
            <Footer listMenu={menuNav} openHours={Info} />
        </main>
    );
}
