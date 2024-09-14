
import React, { useEffect, useState } from 'react';
import Card from "../Card/Card"
import "./FeaturedProducts.scss"
import axios from 'axios';

function FeaturedProducts({ type }) {
    // const data = [
    //     {
    //         id: 1,
    //         img: "/FeaturedProducts/WechatIMG5.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 2,
    //         img: "/FeaturedProducts/WechatIMG6.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 3,
    //         img: "/FeaturedProducts/WechatIMG7.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 4,
    //         img: "/FeaturedProducts/WechatIMG8.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 5,
    //         img: "/FeaturedProducts/WechatIMG9.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 6,
    //         img: "/FeaturedProducts/WechatIMG10.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 7,
    //         img: "/FeaturedProducts/WechatIMG11.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },
    //     {
    //         id: 8,
    //         img: "/FeaturedProducts/WechatIMG12.jpg",
    //         title: "Handmade Press-on Nails",
    //         price: "$25"
    //     },

    // ]

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + "/products?populate=*", {
                    headers: { Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN },
                });
                setData(res.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])

    console.log(data);
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
            </div>

            <div className="bottom">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default FeaturedProducts;