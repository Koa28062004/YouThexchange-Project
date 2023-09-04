import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./run_api.css"

function Products(props) {
    const [search, setProducts] = useState([]);

    const highlightText = (text, keyword) => {
        const parts = [];
        let currentIndex = 0;
    
        while (currentIndex < text.length) {
            const startIndex = text.toLowerCase().indexOf(keyword.toLowerCase(), currentIndex);
            
            if (startIndex === -1) {
                parts.push(text.slice(currentIndex));
                break;
            }
            
            parts.push(text.slice(currentIndex, startIndex));
            parts.push(<span className="highlight">{text.slice(startIndex, startIndex + keyword.length)}</span>);
            currentIndex = startIndex + keyword.length;
        }
    
        return parts;
    }
    
    useEffect(() => {
        async function fetchListProducts() {
            try {
                const urlRequest = `https://apiyouthexchange.onrender.com/api/${props.searchInput}`
                const respond = await fetch(urlRequest)
                const respondData = await respond.json()

                setProducts(respondData)
            } catch (error) {
                console.log("Failed to fetch..." + error.message)
            }
        }
        fetchListProducts();
    }, [props.searchInput]); 

    return (
        <div className="container_search">
            <div className="products">
                    {search.map(product =>
                        <Link className="p" to={product.link} key={product.search}>
                          <p>{highlightText(product.search, props.searchInput)}</p>
                        </Link>
                    )}
            </div>
        </div>
    );
}

export default Products;
