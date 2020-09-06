import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"

export default () => (
  <Layout>
    <h1 style={{ color: "red", textTransform: "uppercase" }}>
      Hello from Gatsby
    </h1>
    <ExampleButton>Click Me</ExampleButton>
  </Layout>
)
