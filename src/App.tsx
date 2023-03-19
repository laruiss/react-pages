import { Suspense } from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

import routes from '~react-pages'

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

export default App