import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopPage from './components/pages/TopPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/ShimmachiInfo" element={<TopPage />} />
      </Routes>
    </Router>
  )
}

export default App;
