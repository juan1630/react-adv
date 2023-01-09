import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {  createContext, ReactElement, CSSProperties } from 'react'
import { onChangeArgs, Product, ProductContextProps  } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps );
const  { Provider } = ProductContext;

//interfaces
export interface Props {

    product: Product;
    children?: ReactElement | ReactElement [];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs )=> void;
    value?:number;
    //styles?: react.CSSPropeties
    //especificamos que el children peuede tener varios elementos
}
    
export const ProductCard = ({ product, children, className, style, onChange , value}: Props  ) => {
        
        const  { counter, increase} = useProduct({
            onChange,
            product,
            value,
        });
        
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