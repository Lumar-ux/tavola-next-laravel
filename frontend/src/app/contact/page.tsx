import { getNavMenu, getInfo } from "@/lib/data";
import Footer from "@/ui/components/footer";
import Header from "@/ui/components/client-header";
import Form from "@/ui/components/form";

export default async function Page() {
    const image01 = "/logo_tavola_colo_02_dark.svg";
    const image01ALT = "Logo Tavola";
    const hoursInfo = await getInfo();
    const menuNav = await getNavMenu();
    return (
        <main className="h-100vh flex flex-1 flex-col">
            <Header listMenu={menuNav} />
            <Form />
            <Footer
                listMenu={menuNav}
                imageSrc={image01}
                imageAlt={image01ALT}
                openHours={hoursInfo}
            />
        </main>
    );
}
