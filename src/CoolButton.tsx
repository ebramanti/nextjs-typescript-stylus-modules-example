import React from "react";
import { Button } from "@videoamp-private/preamp-ui";

const CoolButton: React.StatelessComponent<{onClick?: Function}> = ({ onClick }) => {
    return (
        <Button
            raised
            primary
            onClick={onClick}
        >
            Cool Button to the About Page
        </Button>
    )
};

export default CoolButton;
