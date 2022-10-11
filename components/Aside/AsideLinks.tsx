import React from 'react'

type Props = {}

function AsideLinks({}: Props) {
  return (
    <div className="menu menu-column menu-rounded menu-sub-indention px-3">
        <div className="menu-item">
            <div className="menu-link">
                <span className="menu-icon"></span>
                <span className="menu-title">Dashboard</span>
            </div>
        </div>
    </div>
  )
}

export default AsideLinks