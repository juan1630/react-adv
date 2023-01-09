import { ProductButtons, ProductCard,  ProductImage, ProductTitle } from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart, products } = useShoppingCart();

    return(<div>
        <h1> Shoppig page </h1>
        <hr />
        <div style={{
            display: "flex",
            flexWrap:"wrap"
        }} >
            
            
            {
                products.map( product => (
                    <ProductCard 
                        key={ product.id }
                        product={ product } 
                        className="bg-dark"
                        onChange={ onProductCountChange  }
                        value={ shoppingCart[product.id]?.count || 0  }
                        >
                        <ProductImage className="custom-image" />
                        <ProductTitle className='bg-white text-bold' title="hola mundo jeje" />
                        <ProductButtons className='custom-buttons'  />
                    </ProductCard>))
            }
 
            
        </div>

        <div className="shopping-cart"  >
            {
                //esta funcion nos retorna un arreglo apartir de un Objeto
                Object.entries( shoppingCart ).map(([key, productIn]) =>  (
                    <ProductCard 
                        key={key}
                        style={{
                            width:'200px'
                        }}
                            product={ productIn} 
                            className="bg-dark"
                            value={ productIn.count }
                            onChange={ onProductCountChange }
                            >
                            <ProductImage className="custom-image" />
                            <ProductTitle className='bg-white text-bold' title={`${ productIn.title }`} />
                            <ProductButtons className='custom-buttons' style={{ 
                                                                                display:"flex", 
                                                                                justifyContent:"center",
                                                                                width:"100",
                                                                                maxWidth:'150px'
                                                                                }} />
                        </ProductCard>
    
    
                ))
                
            }
        </div>
    </div>)
};


/*

            <div className="shopping-cart" >
                <ProductCard 
                    style={{
                        width:'200px'
                    }}
                        product={ product2 } 
                        className="bg-dark"
                        >
                        <ProductImage className="custom-image" />
                        <ProductTitle className='bg-white text-bold' title="hola mundo jeje" />
                        <ProductButtons className='custom-buttons' style={{ 
                                                                            display:"flex", 
                                                                            justifyContent:"center",
                                                                            width:"100",
                                                                            maxWidth:'150px'
                                                                            }} />
                    </ProductCard>


            </div>
*/