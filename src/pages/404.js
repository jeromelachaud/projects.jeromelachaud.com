import React from "react"

export default () => {
  return (
    <div>
      {" "}
      <header>
        <h1>Jerome Lachaud</h1>
        <h2>Web Developer</h2>
        <p>
          <a href="/" style={{ color: "grey" }}>
            /home
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/jeromelachaud/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jerome Lachaud LinkedIn"
            style={{ color: "grey" }}
          >
            linkedin
          </a>
          <br />
          <a
            href="https://github.com/jeromelachaud"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jerome Lachaud Github"
            style={{ color: "grey" }}
          >
            github
          </a>
        </p>
      </header>
    </div>
  )
}
