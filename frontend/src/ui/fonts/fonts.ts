import localFont from "next/font/local";
export const HelveticaLTStd = localFont({
    src: [
        {
            path: "./HelveticaLTStd-Roman.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./HelveticaLTStd-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./HelveticaLTStd-Comp.woff2",
            weight: "900",
            style: "normal",
        },
    ],
});
