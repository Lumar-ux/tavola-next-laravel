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

export type menuNavType = {
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
        };
        weekend: {
            days: string;
            hours: string;
        };
    };
    srcIframe: string;
    phone: string;
};

interface normalItem {
    nom: string;
    prix: Array<number>;
    description?: string;
}
interface Category {
  titre: string;
  items: normalItem[];
}

export interface menuType {
  mainTitre: string;
  categories: Category[];
}

export interface AddressFormData {
  firstname: string;
  name: string;
  email: string;
  object: string;
  text: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof AddressFormData]?: string[];
  };
}
