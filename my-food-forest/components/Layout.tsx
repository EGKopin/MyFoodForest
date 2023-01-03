import styles from '../styles/Layout.module.css'
import { FC, ReactNode } from 'react'
import Nav from './Nav'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <>
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
      
        {children}
      </main>
    </div>
    </>
  )
};

//to get this wrapping around everything in the _app.tsx file, we will be passing in the component in _app as children

export default Layout;