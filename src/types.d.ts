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

export type { Service, Office };
