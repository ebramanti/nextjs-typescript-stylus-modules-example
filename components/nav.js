import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";

const Nav = (props) => {
    const { tabs, activeTabIndex, onTabChange } = props;

    return (
        <TabsContainer
            tabs={tabs}
            activeTabIndex={activeTabIndex}
            onTabChange={onTabChange}
        />
    )
}

export default Nav
