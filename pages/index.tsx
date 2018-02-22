import React from 'react'

// @ts-ignore
import stylesheet from '@videoamp-private/preamp-ui/dist/themes.css';
import { Button } from "@videoamp-private/preamp-ui";
function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  }
}

const scoped = resolveScopedStyles(
  <scope>
    <style jsx>{`
      .coolButton {
        color: red;
      }
    `}</style>
  </scope>
)

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <p>ciao</p>
    <Button flat className={`coolButton ${scoped.className}`}>Hello</Button>
    {/* <div className={`coolButton ${scoped.className}`}>qwdqwdqwd</div> */}
    {scoped.styles}
  </div>
