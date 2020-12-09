 
import {useEffect, useState} from 'react'
import { getFetchGifs } from '../helpers/getFetchGift'


 export const useFetchGift =(category)=>{
      
    const [state, setState] = useState({
        data: [],
        loading: true
    })
useEffect(()=>{
    getFetchGifs(category)
    .then(imgs=>{  
        setTimeout(()=>{
            setState({
                data: imgs,
                loading: false
            })
        }, 1000)
    })
},[category])

    return state; 
 }
