// Home.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './Products.scss';
function Products() {

    const catId=parseInt(useParams().id)
    const [maxPrice,setMaxPrice]=useState(100);
    const [sort,setSort]=useState(null);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1}></input>
                        <label htmlFor="1">almond</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2}></input>
                        <label htmlFor="1">square</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3}></input>
                        <label htmlFor="1">coffin</label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="4" value={4}></input>
                        <label htmlFor="1">Stilleto</label>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={100} onChange={(e)=>setMaxPrice(e.target.value)}></input>
                        <span>{maxPrice}</span>
                    </div>
                </div>

                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price"></input>
                        <label htmlFor="asc">Price (Lowest first)</label>      
                    </div>

                    <div className="inputeItem">
                        <input type="radio" id="desc" value="desc" name="price"></input>
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>

            </div>

            <div className="right">
                <List catId={catId} maxPrice={maxPrice} sort={sort}/>
            </div>
        </div>
    );
}

export default Products;