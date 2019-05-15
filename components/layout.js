import Head from 'next/head'
import NavBar from '../components/navbar'

import '../src/css/main.scss'

const Layout = (props) => (
    <div> 
        <Head>
            <title>Gisele Mara Leonardi | Software Developer</title>
        </Head>
        <NavBar />
        {props.children}
    </div>
)

export default Layout