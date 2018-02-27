import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";

export const Nav = (props) => {
    const { tabs, activeTabIndex, onTabChange } = props;

    return (
        <TabsContainer
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={onTabChange}
        />
    )
}
