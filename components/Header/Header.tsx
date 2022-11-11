import next from 'next'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'



type Props = {}

export default function Header({}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
        <div className="container container-fluid d-flex flex-row align-items-center justify-content-between">
          <div id="begin" className="d-flex align-items-center justify-content-center">
            <Link href="/">
              <a className="header-logo d-flex align-items-center p-relative">
                <div className="logo-image"><img src="/images/sakura-flower.svg" alt="cherry-blossom studio icon"/></div>
                <div className="logo-text">Cherri Blossom</div>
                <div className="logo-glow"></div>
              </a>
            </Link>
          </div>

          <div id="center" className="d-flex align-items-center justify-content-center">
            
          </div>

          <div id="end" className="d-flex align-items-center justify-content-center">
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100087521328593&is_tour_dismissed=true" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M9.741 20.595v-7.969H7V9.358h2.741V6.614C9.741 4.618 11.385 3 13.413 3h2.865v2.939h-2.05c-.644 0-1.167.514-1.167 1.148v2.271h3.166l-.438 3.268h-2.728v7.97h-3.32z"></path></g></svg>
                  </a>
                  <div className="glow glow-1"></div>
                </li>
                <li>
                  <a href="https://twitter.com/Cherribstudio" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><path d="M20.26 6.654a7.019 7.019 0 0 1-2.025.556 3.56 3.56 0 0 0 1.553-1.951c-.694.41-1.452.7-2.244.857a3.554 3.554 0 0 0-3.888-.868 3.539 3.539 0 0 0-2.153 4.088 10.056 10.056 0 0 1-7.295-3.692 3.455 3.455 0 0 0-.483 1.776 3.325 3.325 0 0 0 1.3 2.94A10.909 10.909 0 0 1 3.15 9.92v.045a3.791 3.791 0 0 0 3.118 3.463 2.576 2.576 0 0 1-.794.124 2.78 2.78 0 0 1-.598-.063 3.574 3.574 0 0 0 3.337 2.452A7.044 7.044 0 0 1 3 17.403a10.098 10.098 0 0 0 10.27.354A10.048 10.048 0 0 0 18.51 8.94c0-.153-.012-.306-.012-.46a7.14 7.14 0 0 0 1.761-1.826z"></path></g></svg>
                  </a>
                  <div className="glow glow-2"></div>
                </li>
                <li>
                  <a href="https://www.instagram.com/cherribstudio/" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 448 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                  </a>
                  <div className="glow glow-3"></div>
                </li>
              </ul>
            </div>
          </div>

        </div>
    </header>
  )
}