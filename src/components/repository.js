import React from "react"
import Github from "../svg/github.svg"
import Internet from "../svg/internet.svg"
import "./repository.scss"

export default ({
  databaseId,
  name,
  url,
  homepageUrl,
  description,
  repositoryTopics,
}) => (
  <div className="repo-container">
    <div className="repo-header">
      <div className={`repo-cover-${databaseId} repo-cover`}></div>
    </div>
    <div className="repo-body">
      <div className="repo-title">
        <h1>
          <a href={url}>{name}</a>
        </h1>
      </div>
      <div className="repo-summary">
        <p>{description}</p>
      </div>
      <div className="repo-tags">
        <ul>
          {repositoryTopics.nodes.map(({ topic }) => (
            <li key={topic.name}>
              <span>{topic.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="repo-footer">
      <ul>
        <li className="icons">
          <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
            view project
          </a>
        </li>
        <li className="comments">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
            <Internet />
          </a>
        </li>
      </ul>
    </div>
  </div>
)
