import React from 'react'
import linkedin from '../img/linkedin.svg'
import github from '../img/github.svg'

export const Footer = () => {
    return (
        <>
            <div  className='Footer'>
                <p> By Jhessica Gutierrez </p>
                <a href='https://www.linkedin.com/in/jhessica-gutierrez-141304127/' target='blank'><img src={linkedin} alt='' className='Footer-socialNetworks'/></a>
                <a href='https://www.github.com/JessQuintan' target='blank'><img src={github} alt='' className='Footer-socialNetworks'/></a>
            </div>
        </>
    )
}
