import Link from 'next/link'
import cx from "classnames";

import { Head } from '../../components/Head';
import { Nav } from '../../components/Nav';

import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";
import Toolbar from "@videoamp-private/preamp-ui/dist/toolbars/Toolbar";
import FixedDrawer from "@videoamp-private/preamp-ui/dist/lists/FixedDrawer";

import { aboutStyles } from "./about.styles";

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
    <Head title="About"></Head>,
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
            {/* <FixedDrawer /> */}
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
    <style jsx>{aboutStyles}</style>
];
