import Link from "next/link"
import { Head } from "../Head";
import { Nav } from "../Nav";

import "normalize.css";
import "@videoamp-private/preamp-ui/styles/themes.css";
import "@videoamp-private/preamp-ui/styles/main.css";

import { layoutStyles } from "./layout.styles";

export const Layout = ({ children, props, title = "This is the default title" }) => [
    <Head title={title}></Head>,
    <header>
        <Nav {...props}></Nav>
    </header>,
    <div className="outer">
        {children}
    </div>,
    <style jsx>{layoutStyles}</style>,
];
