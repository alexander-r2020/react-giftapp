import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import {GifGrid} from './components/GifGrid'

const GiftExpertApp =()=>{

    const [categories,setCategories]=useState(["pokemon"])


    return(
        <>
            <h2>GiftExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr/>

            <ol>
                {
                    categories.map(categorie=>(
                        <GifGrid
                            key={categorie}
                            category={categorie}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GiftExpertApp