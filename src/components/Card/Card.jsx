import React from 'react';
import { Link } from "react-router-dom"
import "./Card.scss"

function Card({ item }) {
    return (
        <div className="card">
            <Link to={`/product/${item.id}`}>
                <div className="image">
                    <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" />
                </div>
                <h2>{item?.attributes.title}</h2>
                <h3>$ {item?.attributes.price}</h3>
            </Link>
        </div>
    );
}
//[0].attributes.img.data.attributes.url

export default Card;