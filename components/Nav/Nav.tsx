import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";
import Toolbar from "@videoamp-private/preamp-ui/dist/toolbars/Toolbar";

export const Nav = (props) => {
    const tabs = [
        {
            label: "Audience",
            tooltip: "View Audience",
        },
        {
            label: "Content Constraints",
            tooltip: "View Content Constraints",
        },
        {
            label: "Budget Constraints",
            tooltip: "View Budget Constraints",
        },
        {
            label: "Rate Card",
            tooltip: "View Rate Card",
        },
        {
            label: "Optimization",
            tooltip: "View Optimization",
        },
    ];

    const activeTabIndex = 0;
    const onTabChange = () => { };

    return (
        <TabsContainer
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={onTabChange}
            toolbar={<Toolbar title="Template Manager" />}
         />
    )
}
