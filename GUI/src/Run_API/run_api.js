import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./run_api.css"

function Products(props) {
    const [search, setProducts] = useState([]);

    useEffect(() => {
        async function fetchListProducts() {
            try {
                const urlRequest = `http://localhost:8000/api/${props.searchInput}`
                const respond = await fetch(urlRequest)
                const respondData = await respond.json()

                setProducts(respondData)
            } catch (error) {
                console.log("Failed to fetch..." + error.message)
            }
        }

        fetchListProducts()
    }, [props.searchInput]); 

    return (
        <div className="container_search">
            <div className="products">
                    {search.map(product =>
                        <Link className="p" to={product.link} key={product.search}>
                           <p> {product.search}</p>
                        </Link>
                    )}
            </div>
        </div>
    );
}

export default Products;
