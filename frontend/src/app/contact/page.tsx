import { getNavMenu, getInfo } from "@/lib/data";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/client-header";
import Form from "@/components/ui/form";

export default async function Page() {
    const image01 = "/images/logo_tavola_colo_02_dark.svg";
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
