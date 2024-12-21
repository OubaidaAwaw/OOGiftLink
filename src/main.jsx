  // import react & react dom
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

  // import components
import App from './App.jsx'

  // import redux provider and store data
import { Provider } from "react-redux"
import { store } from './Store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
