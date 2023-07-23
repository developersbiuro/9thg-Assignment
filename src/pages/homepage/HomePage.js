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
import joinimg from "../../assets/img/join.png"
import joinimg1 from "../../assets/img/logo (2).png"


export default function HomePage() {
    return (
        <div className='container-fluid'>
            <Navbar />
            <Header />
            <Trend />
            <Top />
            <Discover />
            <Browse />
            <Highlight />
            <Work />
            <Join src={joinimg} />
            <Join src={joinimg1} />
            <Footer />
        </div>
    )
}
