import React from 'react';
import { useFetchGift } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid =({category})=>{


const {data:images,loading} = useFetchGift(category)
// if (!images) return null

    return (
     <>
        <h3 > { images.length === 0 ? null : category} </h3>  
        {loading && <p>Loading...</p>  }

        <div className='card-grid'>
                    {
                        images.map(img=>(
                        <GifGridItem 
                        key = {img.id}
                        {...img}
                        />
                    ))}    
                
            </div>

    </>
    )
}