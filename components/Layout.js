import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head'
const styles = {
  layout: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
  },
  header: {
      height: 60,
  },
  main: {
      flex: 1,
  },
  footer: {
      height: 60,
  },
  divider: {
      margin: '0 8px',
  },
}
// import styles from '../styles/Home.module.css'
// import styles from '../styles/globals.module.css'

class Layout extends Component {
    render(){
      return(
        <div>
          <Head>
              <title>Static Website</title>
          </Head>
          <div style={styles.layout}>
              <header style={styles.header}>
                  <Link href="/"><a>Home</a></Link>
                  <span style={styles.divider}>|</span>
                  <Link href="/post"><a>Post</a></Link>
                  <span style={styles.divider}>|</span>
                  <Link href="/about"><a>About</a></Link>
              </header>
              <main style={styles.main}>
                  {/* <Component {...other} /> */}
              </main>
              <footer style={styles.footer}>Footer</footer>
          </div>
      </div>
      )
    }
}

export default Layout;