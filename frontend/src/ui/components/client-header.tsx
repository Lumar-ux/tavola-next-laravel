import HeaderClient from "@/ui/components/header";
import { getMenu } from "@/lib/data";

export default async function Header() {
    const menu = await getMenu();
    return <HeaderClient data={menu} />;
}
