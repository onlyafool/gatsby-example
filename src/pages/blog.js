import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          quibusdam molestias explicabo incidunt tempore. Perferendis alias
          labore fuga doloremque officiis blanditiis magni velit tempore?
          Ducimus fugit repellat esse odio culpa.
        </p>
      </div>
    </Layout>
  )
}

export default blog
