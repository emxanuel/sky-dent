import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    Element: React.ComponentType
}

const Layout: React.FC<Props> = ({ Element }) => {
    return (
        <div>
            <Navbar />
            <Element />
            <Footer />
        </div>
    )
}

export default Layout