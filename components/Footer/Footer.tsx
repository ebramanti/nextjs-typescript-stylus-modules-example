import { footerStyles } from "./footer.styles";

export const Footer = ({ children }) => [
    <footer>
        {children}
    </footer>,
    <style jsx>{footerStyles}</style>,
];
