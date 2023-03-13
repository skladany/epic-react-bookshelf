// 🐨 you'll need to import react and createRoot from react-dom up here
import '@reach/dialog/styles.css'
import React from 'react'
import ReactDOM from 'react-dom'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked

// 🐨 use createRoot to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

function App() {
  const [openModal, setOpenModal] = React.useState('none')

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={() => setOpenModal('none')}
      >
        <button className="close-button" onClick={() => setOpenModal('none')}>
          <span aria-hidden>Close</span>
        </button>
        <h3>Login</h3>
      </Dialog>

      <Dialog
        aria-label="Registration form"
        isOpen={openModal === 'register'}
        onDismiss={() => setOpenModal('close')}
      >
        <button className="close-button" onClick={() => setOpenModal('none')}>
          <span aria-hidden>Close</span>
        </button>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
