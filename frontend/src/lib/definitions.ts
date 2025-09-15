// This file contains type definitions for data.
export type userType = {
    id: number;
    name: string;
};

export type NavItem = {
  id: number;
  label: string;
  value: string;
  url: string;
};

export type menuType = {
    topList: NavItem[];
    bottomList: NavItem[];
};

export type articleType = {
    id: number;
    title: string;
    body: string;
    status: "draft" | "published" | "archived";
    updated_at: string;
};

export type CardProps = {
    title: string;
    body: string;
    dateUpdate: string;
};

export type InfoType = {
    localisation: string;
    address: string;
    openHours: {
        label: string;
        weekDays: {
            days: string;
            hours: string;
        }
        weekend: {
            days: string;
            hours: string;
        }
    };
    phone: string;
};


