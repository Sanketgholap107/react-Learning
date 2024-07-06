import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>custom app !</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://www.google.com",
//     target: "_blank"
//   },
//   children: "Click here to Redirect to Google"
// }  this wont be executable

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

//to inject the following variable 
const variable = "chai aur code"

const reactElement = React.createElement(
  'a',
  { href: "https://www.google.com", target: "_blank" },
  'click me to visit google',
  variable //this comes after all bydefault parameter, like type then props and then children.
) //this is executable, this is a rspecial method of react to create an element


ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp />
  // MyApp()
  // anotherElement
  reactElement
  // <App />
)
