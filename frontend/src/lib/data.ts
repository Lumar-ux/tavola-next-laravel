import { articleType, InfoType, menuNavType, userType, menuType } from "@/lib/definitions";

const API_BASE_URL = process.env.API_BASE_URL

export async function getUser(): Promise<userType[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/user`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

export async function getArticle(id: string = ""): Promise<articleType[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/article/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

export async function getNavMenu(): Promise<menuNavType> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/menu-header`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

export async function getInfo(): Promise<InfoType[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/info`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}

export async function getMenu(): Promise<menuType> {
    try {
        const response = await fetch(`${API_BASE_URL}/api/menu`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;
    }
}
