import React from 'react'
import Header from '../Header/Header'
import Subheader from '../Subheader/Subheader'
import Footer from '../Footer/Footer'
import Aside from '../Aside/Aside'

type Props = {
    children?: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header/>
      <div className="wrapper">
        {children}
      </div>
    </>
  )
}