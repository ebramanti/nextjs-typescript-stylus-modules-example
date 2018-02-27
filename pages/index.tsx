import Link from 'next/link'
import Head from 'components/head'
import Nav from 'components/nav'
import cx from "classnames";
import { Component } from "react";
import axios from "axios";

import "normalize.css";
import "@videoamp-private/preamp-ui/styles/themes.css";
import "@videoamp-private/preamp-ui/styles/main.css";

import Button from "@videoamp-private/preamp-ui/dist/buttons/Button";

import {
  buttonClassName,
  buttonStyles,
  edward
} from "../styles";

interface HomeProps {
  nodeVersion: string;
}

const Home: NextReact.SFC<HomeProps> = ({ nodeVersion }) => (
    <div>
      <Link prefetch href="/dashboard">
        <Button flat className={cx("bavid", buttonClassName)}>
          <p className="edward">BCB</p>
          <style jsx>{edward}</style>
        </Button>
      </Link>
      <h2>Current version of Node: {nodeVersion}</h2>
      {buttonStyles}
    </div>
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
