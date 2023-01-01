import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {  createContext, ReactElement, CSSProperties } from 'react'
import { Product, ProductContextProps  } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps );
const  { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement [];
    className?: string;
    style?: CSSProperties 
    //styles?: react.CSSPropeties
    //especificamos que el children peuede tener varios elementos
}
    
export const ProductCard = ({ product, children, className, style }: Props  ) => {
        
        const  { counter, increase} = useProduct();
        
        return(<Provider value={{
            counter,
            increase,
            product
        }}   >
                    <div 
                        className={ `${styles.productCard} ${ className }` } 
                        style={style}
                    >
                { 
                    children
                }
            </div>
        </Provider> );
}

{/*
ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons    */}