import React, { useState } from 'react'
import { useEffect } from 'react'

type Props = {}

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin">
              
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            <div className="header-logo d-flex align-items-center">
              Logo
            </div>
          </div>

          <div id="end">
            
          </div>

        </div>
    </header>
  )
}