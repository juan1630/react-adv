import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";


interface useProducrArgs {
    product: Product;
    onChange?: (args:onChangeArgs) => void;
    value?: number;
}


export const useProduct = ({ onChange, product, value = 0 } : useProducrArgs ) => {

    const [ counter, setCounter ] = useState(value);
    const isControlled = useRef( !!onChange );
    
    useEffect( ()=> {
        setCounter(value);
    }, [value]);


    if( isControlled.current && onChange ) {
        //le decimos a typescript que siempre vendra el valor de la función
        //  return onChange({count: value, product });
    }

    const increase = ( numero: number ) => {
        const newValue =  Math.max( counter  + numero, 0);
        setCounter( newValue );

       onChange && onChange({ count:newValue, product });
       //le decimos que si viene la propiedad onChange la ejecute
       //no se ejecuta si el operador and es falso
    }

    return {
        counter,
        increase
    }
}