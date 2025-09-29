import type { Metadata } from "next";
import "@/styles/globals.css";
import { HelveticaLTStd } from "../../public/fonts/fonts";

export const metadata: Metadata = {
    title: "Tavola | Pizzeria Innovante – Pizzas à la Truffe & saveurs uniques à Vancouver / Portland",
    description:
        "Tavola est la pizzeria contemporaine de Vancouver/Portland! Découvrez nos pizzas créatives aux saveurs uniques : truffe blanche, gorgonzola, mangue épicée et plus. Ambiance branchée garantie. 🍕",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={HelveticaLTStd.className}>
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body className="bg-tavo-light flex h-dvh flex-col items-start overflow-x-clip px-32 md:px-48 xl:px-200">
                {children}
            </body>
        </html>
    );
}
