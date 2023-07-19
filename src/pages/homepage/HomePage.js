import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Trend from '../../component/trend/Trend'
import Header from '../../component/header/Header'


export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Header />
            <Trend />
        </div>
    )
}
