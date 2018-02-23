import React from "react";
import Layout from '../components/layout';
import Button from "../src/CoolButton";
import { coolClass } from "./index.stylus";

export default () => (
    <Layout title="About page">
        <div className={coolClass}>About Page.</div>
        <Button raised>Click here</Button>
    </Layout>
)
