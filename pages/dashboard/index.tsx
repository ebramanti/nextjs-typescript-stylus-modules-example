import Link from 'next/link'
import Head from 'components/head'
import Nav from 'components/nav'
import cx from "classnames";
import { TabsContainer, Toolbar } from '@videoamp-private/preamp-ui';

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

const activeTabIndex = 0;
const onTabChange = () => {};

export default () => [
    <Head title="Template Manager"></Head>,
    <header>
        <TabsContainer
            toolbar={<Toolbar title="Template Manager"/>}
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={this.onTabChange}
        />
    </header>,
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
];
