import Link from 'next/link'
import cx from "classnames";
import { Component } from "react";
import axios from "axios";

import "normalize.css";
import "@videoamp-private/preamp-ui/styles/themes.css";
import "@videoamp-private/preamp-ui/styles/main.css";

import Button from "@videoamp-private/preamp-ui/dist/buttons/Button";

interface HomeProps {
  nodeVersion: string;
}

const Home: NextReact.SFC<HomeProps> = ({ nodeVersion }) => (
    <div>
      <Link prefetch href="/dashboard">
        <Button flat>
          <p className="edward">BCB</p>
        </Button>
      </Link>
      <h2>Current version of Node: {nodeVersion}</h2>
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
