import TabsContainer from "@videoamp-private/preamp-ui/dist/lists/TabsContainer";

export const Nav = (props) => {
    const { toolbar, tabs, activeTabIndex, onTabChange } = props;

    return (
        <TabsContainer {...props} />
    )
}
