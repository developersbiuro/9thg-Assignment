import React from 'react'
import WorkCard from './workCard/WorkCard'
import workimg1 from "../../assets/img/w1.png"
import workimg2 from "../../assets/img/w2.png"
import workimg3 from "../../assets/img/w3.png"


export default function Work() {
  return (
    <div className='container tr trhd'>
        <div className='row'>
           <h1>How It Works</h1>       
           <h5>Find out how to get started</h5>
           <WorkCard src={workimg1} title="Setup Your Wallet" para="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner." />
           <WorkCard src={workimg2} title="Create Collections" para="Upload your work and setup your collection. Add a description, social links and floor price." />
           <WorkCard src={workimg3} title="Start Earning" para="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others." />

        </div>
        
    </div>
  )
}
