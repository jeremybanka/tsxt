/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { ReactElement } from "react"
import logo from "./logo.svg"
import "./App.css"

const App = (): ReactElement => (
  <div className="App">
    <header
      className="App-header"
      css={css`
        background: #0096ff;
        a {
          color: #2ff;
        }
      `}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
)

export default App
