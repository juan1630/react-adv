import { Props as PropsProductCard } from '../components/ProductCard'
import { Props as ProductTittleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtons } from '../components/ProductButtons';

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
    ({children, product} : PropsProductCard ) : JSX.Element;
    Title: (Pops: ProductTittleProps ) => JSX.Element;
    Image: (Props: ProductImageProps ) => JSX.Element;
    Buttons: ({className}: ProductButtons ) => JSX.Element ;
}


export interface onChangeArgs {
    product: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
    //extendemos de la interfaz del producto y la agregamos la propiedad count
}