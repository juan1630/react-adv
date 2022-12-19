import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components";

const product = {
    id:'123',
    title:'Producto 1',
    img:"coffee-mug.png"
}

export const ShoppingPage = () => {
    return(<div>
        <h1> Shoppig page </h1>
        <hr />

        <div style={{
            display: "flex",
            flexWrap:"wrap"
        }} >
            
            <ProductCard product={ product } >
                <ProductCard.Image  />
                <ProductCard.Title title="Hola jeje" />
                <ProductCard.Buttons />
            </ProductCard>

            <ProductCard product={ product } >
                <ProductImage />
                <ProductTitle  title="hola mundo jeje" />
                <ProductButtons />
            </ProductCard>
            

        </div>
    </div>)
};
