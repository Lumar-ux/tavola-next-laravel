import type { Metadata } from "next";
import "@/styles/globals.css";
import { HelveticaLTStd } from "../../public/fonts/fonts";

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
            <body className="bg-tavo-light flex h-dvh flex-col items-start px-32 md:px-48 xl:px-200 overflow-x-clip">
                {children}
            </body>
        </html>
    );
}
