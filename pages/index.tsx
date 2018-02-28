import Link from 'next/link'
import cx from "classnames";
import { Component } from "react";
import axios from "axios";
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';

import Button from "@videoamp-private/preamp-ui/dist/buttons/Button";

import { indexStyles } from "./index.styles";


const Home: NextReact.SFC<HomeProps> = () => (
    <Layout title="This is the home page">
        <aside></aside>
        <section>
            <main>
                <div className="container">
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </main>
            <Footer>Hello</Footer>
        </section>
        <style jsx>{indexStyles}</style>
    </Layout>
)

export default Home;
