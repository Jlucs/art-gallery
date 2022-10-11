import React, { useState } from 'react'
import { useEffect } from 'react'
import PhoneMenu from '../Modal/PhoneMenu'

type Props = {}

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          
          <div id="begin" className="d-flex align-items-center justify-content-center">
            {/* <PhoneMenu/> */}
            <a className="header-logo d-flex align-items-center " href="/">
              <img src="/images/logo.png"/>
            </a>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            
          </div>

          <div id="end">
            
          </div>

        </div>
    </header>
  )
}