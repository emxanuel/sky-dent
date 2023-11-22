interface Service {
    id: number;
    title: string;
    content: string[];
}

interface Office{
    id: number,
    name: string,
    phone: string,
    location: string
}

type TProduct = {
    id: number,
    name: string,
    price: number,
    imageUrl
}

export type { Service, Office, TProduct };
