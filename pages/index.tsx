import React from "react";
import Layout from '../components/layout';
import Button from "../src/CoolButton";
//@ts-ignore
import { coolClass } from "./index.stylus";

export default () => (
    <Layout>
        <div className={coolClass}>Hello World.</div>
        <Button
            flat
            iconClassName="material-icons"
            iconChildren="home"
            onClick={() => { }}
        >
            Home
        </Button>
    </Layout>
)