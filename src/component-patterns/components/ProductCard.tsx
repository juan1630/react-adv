import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {  createContext } from 'react'
import { ProductContextProps, Props } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps );
const  { Provider } = ProductContext;

    
export const ProductCard = ({ product, children }: Props  ) => {
        
        const  { counter, increase} = useProduct();
        
        return(<Provider value={{
            counter,
            increase,
            product
        }}   >
                    <div className={ styles.productCard } >
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