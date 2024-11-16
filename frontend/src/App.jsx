import './styles/global.css'
import './styles/grid.css'
import './styles/style.css'

import Home from './components/HomePage/home'
import Footer from './components/Footer/footer'

function App() {
  return (
    <>
      <head>
        <title>My First React App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Home />
        <Footer />
      </body>
    </>
  )
}

export default App
