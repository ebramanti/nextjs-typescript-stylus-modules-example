import Link from 'next/link'
import React from "react";
//@ts-ignore
import { coolClass } from "./index.stylus";
import Button from "../src/CoolButton";
import "../src/App.css";

export default () =>
  <div className="va-dark">
    <div className={coolClass}>
      Hello World.
    </div>
    <br />
    <Link href="/about">
      <Button />
    </Link>
  </div>
