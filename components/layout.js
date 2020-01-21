import Head from 'next/head'
import NavBar from '../components/navbar'

import '../src/css/main.scss'

const Layout = (props) => (
    <div> 
        <Head>
            <title>Gisele Mara Leonardi | Web Developer {props.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta charSet="UTF-8"></meta>
            <html lang="pt-br"></html>
            <meta name="Description" content={props.content}></meta>
            <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" async></link>
        </Head>
        <NavBar />
        {props.children}
    </div>
)

export default Layout