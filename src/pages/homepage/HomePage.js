import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Trend from '../../component/trend/Trend'
import Header from '../../component/header/Header'
import Top from '../../component/top/Top'
import Discover from '../../component/discover/Discover'
import Browse from '../../component/browse/browse'
import Highlight from '../../component/highlight/Highlight'
import Work from '../../component/work/Work'
import Join from '../../component/join/Join'
import Footer from '../../component/footer/Footer'


export default function HomePage() {
    return (
        <div className='container-fluid'>
            <Navbar />
            <Header />
            <Trend />
            <Top />
            <Discover />
            <Browse/>
            <Highlight  />
            <Work />
            <Join/>
            <Footer/>
        </div>
    )
}
