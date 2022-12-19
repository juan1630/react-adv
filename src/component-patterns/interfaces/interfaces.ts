import { ReactElement } from "react";

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement []
    //especificamos que el children peuede tener varios elementos
}

export interface Product{
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increase: ( numero: number ) => void
    product:Product
}


export interface ProductCardhoc{
    ({children, product} : Props ) : JSX.Element;
    Title: ({ title }: { title?:  string  }) => JSX.Element;
    Image: ({ img }: {  img?: string}) => JSX.Element;
    Buttons: () => JSX.Element ;
}