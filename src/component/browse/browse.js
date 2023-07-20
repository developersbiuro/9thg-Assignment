import React from 'react'
import BrowseCard from '../browseCard/BrowseCard'
import iconimg1 from "../../assets/img/i1.png"
import iconimg2 from "../../assets/img/i2.png"
import iconimg3 from "../../assets/img/i3.png"
import iconimg4 from "../../assets/img/i4.png"
import iconimg5 from "../../assets/img/i5.png"
import iconimg6 from "../../assets/img/i6.png"
import iconimg7 from "../../assets/img/i7.png"
import iconimg8 from "../../assets/img/i8.png"


export default function browse() {
  return (
    <div className='trhd tr row'>
        <h1 className='trhd'>Browse Categories</h1>
        <BrowseCard src={iconimg1} title="Art" />
        <BrowseCard src={iconimg2} title="Collection" />
        <BrowseCard src={iconimg3} title="Musics" />
        <BrowseCard src={iconimg4} title="PhotoGraphy" />
        <BrowseCard src={iconimg5} title="Videos" />
        <BrowseCard src={iconimg6} title="Utility" />
        <BrowseCard src={iconimg7} title="Sports" />
        <BrowseCard src={iconimg8} title="Virtual Worlds" />

    </div>
  )
}
