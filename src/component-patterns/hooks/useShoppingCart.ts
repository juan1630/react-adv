import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces';
import { products } from "../data/Products";

export const useShoppingCart = () => {

    const [shoppingCart, setshoppingCart] = useState<{[key:string]:ProductInCart }>({});

    const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {


        setshoppingCart( oldShoppingCart => {
            if( count == 0 ){
                const { [product.id]:toDelete,  ...rest } = oldShoppingCart;
                return rest;
            }   
            return {
                ...oldShoppingCart,
                [product.id]:{ ...product, count }
            }
        });
    }

    return {
        onProductCountChange,
        shoppingCart,
        products
    }
}

       /*
        
                const productInCart: ProductInCart = oldShoppingCart[product.id] ||  { ...product, count: 0 }

             sumar al count
            if( Math.max( productInCart.count + count , 0 ) > 0 ) {
                productInCart.count +=count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //borrar al producto, si se tiene un '0' en el count

            const { [product.id]:toDelete,  ...rest } = oldShoppingCart;
            return rest;
        
}
*/