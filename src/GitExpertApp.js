import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { Footer } from './components/Footer';
import { GifGrid } from './components/GifGrid';


const GitExpertApp =()=> {

    const [categories, setCategories] = useState(['Sakura Card Captor'])
      
    return (
        <>
        <h1 className='title-gifExpert'>Gif Expert</h1>
        <p>Encuentra tus Gifs preferidos</p>
        <AddCategory setCategories = {setCategories}/>
        <hr/>

        <ol>
            {
                categories.map((category)=>(
                    <GifGrid 
                    key = {category}
                    category = {category}
                    />

                ))
             }  
        </ol>
        
        <Footer/>

        </>
    )
    
}


export default GitExpertApp