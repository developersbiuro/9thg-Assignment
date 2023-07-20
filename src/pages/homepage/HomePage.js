import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Trend from '../../component/trend/Trend'
import Header from '../../component/header/Header'
import Top from '../../component/top/Top'


export default function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <Header />
            <Trend />
            <Top/>
        </div>
    )
}
