import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import cx from "classnames";

import {
    dashboardStyles,
} from "./dashboardStyles";

const tabs = [
    {
        label: "Data",
        tooltip: "View raw data",
    },
    {
        label: "Analytics",
        tooltip: "View data analysis results",
    },
];

export default () => [
    <Head title="Template Manager"></Head>,
    <header></header>,
    <div className="outer">
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
            <footer></footer>
        </section>
    </div>,
    <style jsx>{dashboardStyles}</style>
]


// export default () => <div>
//     <Head
//         title="test page bavid"
//         description="Test Page description goes here"
//     ></Head>
//     <Nav tabs={tabs}></Nav>
// </div>
