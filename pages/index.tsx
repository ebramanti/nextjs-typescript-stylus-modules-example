import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import cx from "classnames";

import "@videoamp-private/preamp-ui/dist/themes.css";
import "@videoamp-private/preamp-ui/dist/style.css";

import Button from "@videoamp-private/preamp-ui/dist/buttons/Button";

import {
  buttonClassName,
  buttonStyles,
  edward
} from "../styles";

export default () => <div>
  <Link href="/bavid">
    <Button flat className={cx("bavid", buttonClassName)}>
      <p className="edward">BB</p>
      <style jsx>{edward}</style>
    </Button>
  </Link>
  {buttonStyles}
</div>
