import React from 'react'
import TrendCard from '../trendCard/TrendCard'
import a1img from "../../assets/img/1 .png"
import a2img from "../../assets/img/11.png"
import a3img from "../../assets/img/12.png"
import b1img from "../../assets/img/2.png"
import b2img from "../../assets/img/21.png"
import b3img from "../../assets/img/22.png"
import c1img from "../../assets/img/3.png"
import c2img from "../../assets/img/31.png"
import c3img from "../../assets/img/32.png"
import logo from "../../assets/img/Avatar Placeholder.png"



export default function Trend() {
  return (
    <div className='container tr con' id='tr'>
      <h1 className='trhd tr'>Trending Collection</h1>
      <h5 className='trhd'>Checkout our weekly updated trending collection.</h5>
      <div className='row con'>

        <TrendCard src={a1img} asrc={a2img} bsrc={a3img} title="DSGN Animals" logosrc={logo} para="MrFox" />
        <TrendCard src={b1img} asrc={b2img} bsrc={b3img} title="DSGN Animals" logosrc={logo} para="MrFox" />
        <TrendCard src={c1img} asrc={c2img} bsrc={c3img} title="DSGN Animals" logosrc={logo} para="MrFox" />

      </div>

    </div>
  )
}
