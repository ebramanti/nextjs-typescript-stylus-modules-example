import Link from 'next/link'
import cx from "classnames";
import { Component } from "react";
import axios from "axios";
import { Layout } from '../components/Layout';

import Button from "@videoamp-private/preamp-ui/dist/buttons/Button";

import { indexStyles } from "./index.styles";


interface HomeProps {
  nodeVersion: string;
}

const Home: NextReact.SFC<HomeProps> = ({ nodeVersion }) => (
    <Layout title="This is the home page">
        <aside></aside>
        <Link prefetch href="/audience">
            <Button flat className="indexButton">Load Audience</Button>
        </Link>
        <h2>Current version of Node: {nodeVersion}</h2>
        <style jsx>{indexStyles}</style>
    </Layout>
)

Home.getInitialProps = async() => {
  const { data } = await axios.get('http://semver.io/node')
  const nodeVersion = data;
  return { nodeVersion }
}

Home.defaultProps = {
  nodeVersion: "Unknown"
};

export default Home;
