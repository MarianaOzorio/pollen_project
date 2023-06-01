import React from "react";
import './CardProductPhoto.css';

import Line from "../Line/Line";

function CardProductPhoto(product) {
    return (
        <div className="purchaseContainer">
            <img className="productPhoto" src={product.src} alt="Foto do Produto" />
            <div>
                <h3>{product.name}</h3>
                <Line />
                <p>Preço Unitário: {product.price}</p>
                <p>Quantidade: {product.amount}</p>
                <p>Subtotal: {product.total}</p>
            </div>
        </div>
    );
}

export default CardProductPhoto;