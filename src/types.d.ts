interface Service {
    id: number;
    title: string;
    content: string[];
}

interface Office{
    id: number,
    location: string,
    phone: string
}

export type { Service, Office };
