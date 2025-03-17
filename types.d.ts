interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

type ProductType = {
    id: string;
    title: string;
    descrption: string;
    price: number;
    image: string;
    quantity: number;
    handle: string;
    tags: string
}