import React, { useState, useEffect } from 'react';
import "./run_api.css"

function Products(props) {
    const [search, setProducts] = useState([]);
    const { searchInput } = props; // Trích xuất searchInput từ props

    useEffect(() => {
        async function fetchListProducts() {
            try {
                const urlRequest = `http://localhost:8000/api/${searchInput}`
                const respond = await fetch(urlRequest)
                const respondData = await respond.json()

                setProducts(respondData)
            } catch (error) {
                console.log("Failed to fetch..." + error.message)
            }
        }

        fetchListProducts()
    }, [searchInput]); // Đặt dependency là searchInput để useEffect re-run khi searchInput thay đổi

    return (
        <div className="container_search">
            <table className="products">
                <tbody className="product__row">
                    {search.map(product =>
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
