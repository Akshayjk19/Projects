import React from 'react'
import NavigationBar from './NavigationBar'

function Layout({children}) {
  return (
    <div>
    <NavigationBar/>
    <main style={{height:'80vh'}}>
    {children}
    </main>
    </div>
  )
}

export default Layout