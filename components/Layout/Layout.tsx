import Link from 'next/link'
import Head from 'next/head'

// import "normalize.css";
// import "@videoamp-private/preamp-ui/styles/themes.css";
// import "@videoamp-private/preamp-ui/styles/main.css";

export const Layout = ({ children, props, title = "This is the default title" }) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <header>
            <nav>
                <Link href='/'><a>Home</a></Link> |
                <Link href='/about'><a>About</a></Link> |
                <Link href='/contact'><a>Contact</a></Link>
            </nav>
        </header>

        {children}
    </div>
)
