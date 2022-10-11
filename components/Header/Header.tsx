import next from 'next'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
        <div className="container container-fluid d-flex flex-row align-items-stretch justify-content-between">
          <div id="begin" className="d-flex align-items-center justify-content-center">
            <Link href="/">
              <a className="header-logo d-flex align-items-center"></a>
            </Link>
              <img src="/images/logo.png"/>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            
          </div>

          <div id="end">
            
          </div>

        </div>
    </header>
  )
}