import { Navigation } from "../router/Navigation";

export const LazyLoadLayout = () => {

    return (
    <>
        <h1> Lazy page  </h1> 
        <Navigation />
    </>)
}


//solo para cuando se caraga de manera perezosa
export default LazyLoadLayout;