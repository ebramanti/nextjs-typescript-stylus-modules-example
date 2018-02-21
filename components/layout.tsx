import React from "react";
import Link from 'next/link';
import Head from 'next/head';
import themes from "@videoamp-private/preamp-ui/dist/themes.css";
import style from "@videoamp-private/preamp-ui/dist/style.css";

export default ({ children, title = 'VideoAmp' }) => (
    <html className="va-dark">
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <style>
                <style dangerouslySetInnerHTML={{ __html: themes }} />
                <style dangerouslySetInnerHTML={{ __html: style }} />
            </style>
        </Head>
        <header>
            <nav>
                <Link href='/'><a>Home</a></Link> |
                <Link href='/about'><a>About</a></Link>
            </nav>
        </header>

        {children}
    </html>
)