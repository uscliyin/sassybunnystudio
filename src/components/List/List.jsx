import React from 'react'
import "./List.scss"
import Card from "../Card/Card"
const List = () => {
    const data = [
        {
            id: 1,
            img: "/FeaturedProducts/WechatIMG5.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 2,
            img: "/FeaturedProducts/WechatIMG6.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 3,
            img: "/FeaturedProducts/WechatIMG7.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 4,
            img: "/FeaturedProducts/WechatIMG8.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 5,
            img: "/FeaturedProducts/WechatIMG9.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 6,
            img: "/FeaturedProducts/WechatIMG10.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 7,
            img: "/FeaturedProducts/WechatIMG11.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },
        {
            id: 8,
            img: "/FeaturedProducts/WechatIMG12.jpg",
            title: "Handmade Press-on Nails",
            price: "$25"
        },

    ]


    return (
        <div className="list">
            {data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List