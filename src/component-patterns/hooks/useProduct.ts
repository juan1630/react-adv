import { useState } from "react";

export const useProduct = () => {
    
    const [ counter, setCounter   ] = useState(0);

    const increase = ( numero: number ) => {
        setCounter( ( prev: number ) =>  Math.max(prev + numero, 0) );
    }

    return {
        counter,
        increase
    }
}