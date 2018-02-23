import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import cx from "classnames";

import Button from "@videoamp-private/preamp-ui/dist/src/components/buttons/Button";

import {
    buttonClassName,
    buttonStyles,
    edward
} from "../styles";

export default () => <div>
    <Link href="/">
        <Button flat className={cx("bavid", buttonClassName)}>
            <p className="edward">Back to Home</p>
            <style jsx>{edward}</style>
        </Button>
    </Link>
    {buttonStyles}
</div>
