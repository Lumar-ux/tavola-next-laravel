import { menuNavType } from "@/lib/definitions";
import HeaderClient from "@/ui/components/header";


export default async function Header({ listMenu }: { listMenu: menuNavType }) {
    return <HeaderClient data={listMenu} />;
}
