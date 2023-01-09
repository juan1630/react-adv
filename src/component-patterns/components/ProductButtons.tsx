import { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';


export interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    const { increase, counter  }  = useContext (ProductContext );
 
     return(
         <div className={`${styles.buttonsContainer }  ${ className } `} style={  style}   >
            <button className={ styles.buttonMinus } 
                onClick={ ()=> increase(-1) }
            >
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
 
 