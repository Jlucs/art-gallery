import React, { useState } from 'react'
import { useEffect } from 'react'

type Props = {
  children?: React.ReactNode;
}

export default function Subheader({children}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="subheader d-flex align-items-stretch">
      {children}
    </header>
  )
}