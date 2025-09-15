import type { Metadata } from "next";
import "@/ui/globals.css";
import { HelveticaLTStd } from "@/ui/fonts/fonts";

export const metadata: Metadata = {};

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
            <body className="bg-tavo-light flex h-dvh flex-col px-48 xl:px-200">
                {children}
            </body>
        </html>
    );
}
