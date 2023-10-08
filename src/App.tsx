import GetAppRouters from './router'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
function App() {
  return (
    <div>
      <Router>
        <GetAppRouters />
      </Router>
    </div>
  )
}
export default App
