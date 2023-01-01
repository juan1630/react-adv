import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css'

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
            
            <ProductCard 
            product={ product }
            className="bg-dark"
            >
                <ProductCard.Image  />
                <ProductCard.Title  className='bg-white text-bold' title="Hola jeje" />
                <ProductCard.Buttons className='custom-buttons'  />
            </ProductCard>

            <ProductCard 
                product={ product } 
                className="bg-dark"
                >
                <ProductImage className="custom-image" />
                <ProductTitle className='bg-white text-bold' title="hola mundo jeje" />
                <ProductButtons className='custom-buttons'  />
            </ProductCard>
            

            <ProductCard 
                product={product} 
                style={{
                    backgroundColor:"#70D1F8"
                }}
                >
                
                <ProductCard.Image style={{
                    boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"
                }} />
                <ProductCard.Title   style={{
                    fontWeight:"bold",
                    color:'white'
                }} />
                <ProductCard.Buttons style={{
                   color:'black',
                   display:"flex",
                   justifyContent:"end" 
                }}  />
            </ProductCard>

        </div>
    </div>)
};
