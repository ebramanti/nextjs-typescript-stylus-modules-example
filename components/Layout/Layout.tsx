import Link from 'next/link'
import Head from 'next/head'
import { Nav } from '../Nav';

import "normalize.css";
import "@videoamp-private/preamp-ui/styles/themes.css";
import "@videoamp-private/preamp-ui/styles/main.css";

import { layoutStyles } from "./layout.styles";

export const Layout = ({ children, props, title = "This is the default title" }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <Nav {...props}></Nav>
        </header>
        <div className="outer">
            {children}
        </div>
        <style jsx>{layoutStyles}</style>
    </div>
)
