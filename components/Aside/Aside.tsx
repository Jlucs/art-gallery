import React from 'react'
import AsideLinks from './AsideLinks'

type Props = {}

function Aside({}: Props) {
  return (
    <aside className="aside">
      <div className="aside-brand">
        <div className="aside-logo">
          <div className="aside-text">CB</div>
          <div className="aside-glow"></div>
        </div>
      </div>
    </aside>
  )
}

export default Aside