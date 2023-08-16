import React, { useState, useEffect } from 'react';
import "./run_api.css"
 
function Products() {
    const [search, setProducts] = useState([]);
 
    useEffect(() => {
        async function fetchListProducts(){
            try {
                const urlRequest = "http://localhost:8000/api/search"
                const respond = await fetch(urlRequest)
                const respondData= await respond.json()
 
                setProducts(respondData)
            } catch (error) {
                console.log("Failed to fetch..." + error.message)
            }
        }
 
        fetchListProducts()
    }, []);
 
    return (
        <div className="container_search">
            <table className="products">
                <tbody className="product__row">
                    { search.map(product =>
                        <tr key={product}>
                            {product}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
 
export default Products;