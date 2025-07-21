import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Slide, ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <Toaster/> */}
  <Provider store={store}>
    <App />
 
    <ToastContainer
  position="top-right"
  autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>

  </Provider>

  </BrowserRouter>
)