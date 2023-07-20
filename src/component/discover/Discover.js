import React from 'react'
import DiscoverCard from '../discoverCard/DiscoverCard'
import disimg1 from "../../assets/img/r.png"
import disimg2 from "../../assets/img/dis2.png"
import disimg3 from "../../assets/img/dis3.png"



export default function Discover() {
    return (
        <div className='tr container'>
            <div className='row'>
                <h1 className='trhd'>Discover More NFTs</h1>
                <h5 className='trhd'>Explore new trending NFTs</h5>


                <DiscoverCard src={disimg1} logotitle="MoonDancer" title="Distant Galaxy" />



                <DiscoverCard src={disimg2} logotitle="NebulaKids" title="Life On Edena" />



                <DiscoverCard src={disimg3} logotitle="SpaceOne" title="AstroFiction" />




            </div>
        </div>
    )
}
