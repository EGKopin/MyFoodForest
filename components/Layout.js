import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

const Layout = ({children}) => {
  return (
    <>
    <Meta />
    <Nav />
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />      
        {children}
      </main>
    </div>
    </>
  )
};

//to get this wrapping around everything in the _app.jsx file, we will be passing in the component in _app as children

export default Layout;