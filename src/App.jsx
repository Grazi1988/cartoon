import React from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import{createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`

function App(){
  return(
    <>
    <GlobalStyle/>
     <Header/>
     <Main/>
    </>
  )
}

export default App