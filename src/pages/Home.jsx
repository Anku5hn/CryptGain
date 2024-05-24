import React from 'react'
import Layout from '../components/layout/Layout.jsx'
import MobileHome from '../components/MobileHome.jsx'
import DesktopHome from '../components/DesktopHome.jsx'
const Home = () =>{

    return(
        <>
        <Layout>
            <MobileHome />
            <DesktopHome />
        </Layout>
        </>
    )
}
export default Home;