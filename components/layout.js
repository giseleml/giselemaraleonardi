import Head from 'next/head'
import NavBar from '../components/navbar'

import '../src/css/main.scss'

const Layout = (props) => (
    <div> 
        <Head>
            <title>Gisele Mara Leonardi | Software Developer</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <NavBar />
        {props.children}
    </div>
)

export default Layout