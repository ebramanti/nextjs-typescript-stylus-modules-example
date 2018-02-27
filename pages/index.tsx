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
    <Layout>
        <div>
            <Link prefetch href="/audience">
                <Button flat styleName="indexButton">Load Audience</Button>
            </Link>
            <h2>Current version of Node: {nodeVersion}</h2>
        </div>
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
