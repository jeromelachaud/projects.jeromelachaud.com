import React from "react"
import Repository from "./repository"

export default ({ data }) => (
  <>
    {data.map(repository => (
      <Repository key={repository.name} {...repository} />
    ))}
  </>
)
