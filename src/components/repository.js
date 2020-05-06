import { OutboundLink } from "gatsby-plugin-google-analytics"
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
          <OutboundLink href={url}>{name}</OutboundLink>
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
          <OutboundLink
            href={homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            view project
          </OutboundLink>
        </li>
        <li className="comments">
          <OutboundLink href={url} target="_blank" rel="noopener noreferrer">
            <Github />
          </OutboundLink>
          <OutboundLink
            href={homepageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Internet />
          </OutboundLink>
        </li>
      </ul>
    </div>
  </div>
)
