import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Trend from '../../component/trend/Trend'
import Header from '../../component/header/Header'
import Top from '../../component/top/Top'
import Discover from '../../component/discover/Discover'
import Browse from '../../component/browse/browse'


export default function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <Header />
            <Trend />
            <Top />
            <Discover />
            <Browse/>
        </div>
    )
}
