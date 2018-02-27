import Link from 'next/link'
import { Head } from '../../components/Head';
import cx from "classnames";
import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";
import Toolbar from "@videoamp-private/preamp-ui/dist/toolbars/Toolbar";

import {
    dashboardStyles,
} from "./dashboard.styles";

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
        <Nav
            toolbar={<Toolbar title="Template Manager"/>}
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={this.onTabChange}
        />
    </header>,
    <div className="outer">
        <aside>
            <FixedDrawer />
        </aside>
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
