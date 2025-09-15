import { menuType } from "@/lib/definitions";
import HeaderClient from "@/ui/components/header";


export default async function Header({ listMenu }: { listMenu: menuType }) {
    return <HeaderClient data={listMenu} />;
}
