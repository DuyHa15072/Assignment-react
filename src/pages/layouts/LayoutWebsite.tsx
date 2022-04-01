import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import HeaderWebtsite from '../../components/HeaderWebsite';


const LayoutWebsite = () => {
    return (
        <div>
          <HeaderWebtsite />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default LayoutWebsite