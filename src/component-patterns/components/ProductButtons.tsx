import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';


export const ProductButtons = () => {

    const { increase, counter  }  = useContext (ProductContext );
 
     return(
         <div className={ styles.buttonsContainer } >
         <button className={ styles.buttonMinus } >
             -
         </button>
         <div className={styles.countLabel} >
             {  counter }
         </div>
 
         <button onClick={() => increase(1)}  className={ styles.buttonAdd } >
             +
         </button>
 
     </div>
     )
 }
 
 