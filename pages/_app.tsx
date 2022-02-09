import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CursorProvider } from "react-cursor-custom";
import { cursorSettingType } from 'interfaces';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function App({ Component, pageProps }) {
  const setting:cursorSettingType = {
    ringSize: 30,
    transitionTime: 200,
    color: 'lightGray'
  }
  return (
    <>
    <CursorProvider {...setting}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </CursorProvider>
    </>
  )
}

export default App