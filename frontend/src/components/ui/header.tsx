import { menuNavType } from "@/lib/definitions";
import HeaderClient from "@/components/ui/header-client";

export default async function Header({ listMenu }: { listMenu: menuNavType }) {
    return <HeaderClient data={listMenu} />;
}
