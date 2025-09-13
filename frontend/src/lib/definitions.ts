// This file contains type definitions for data.
export type userType = {
    id: number;
    name: string;
};

export type menuType = {
    id: number;
    label: number;
    value: string;
    url: string;
};

export type articleType = {
    id: number;
    title: string;
    body: string;
    status: "draft" | "published" | "archived";
};
