import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import Api from "../core/api"

export default class Home extends React.Component {

  static async getInitialProps() {

    const api = new Api()

    let todos = await api.fetchJson("/todo/get")

    return { todos }
  }

  async click() {
    const api = new Api()

    await api.fetchJson("/todo/add", "POST", { text: "test" })
  }

  render() {
    console.log(this.props.todos)

    return (
      <div>
        <Head>
          <title>Demo todo list</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <div className={styles.welcome}>
          <h1>TODO LIST</h1>
        </div>

        <button onClick={this.click.bind(this)}>ADD</button>
      </div>
    )
  }

}
