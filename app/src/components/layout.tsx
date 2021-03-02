import React from 'react'
import Head from 'next/head'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Showcase</title>
      </Head>
      <main>
        <div>
          { children }
        </div>
      </main>
    </div>
  )
}

export default Layout