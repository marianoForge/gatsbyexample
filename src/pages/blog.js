import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"

export default () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is the blog Page</h1>
        <p className={styles.text}>
          Well, aren't you going up to the lake tonight, you've been planning it
          for two weeks. Marty, you seem so nervous, is something wrong? Well,
          Biff. I think it's terrible. Girls chasing boys. When I was your age I
          never chased a boy, or called a boy, or sat in a parked car with a
          boy. What did you sleep in your clothes again last night.
        </p>
      </div>
    </Layout>
  )
}
