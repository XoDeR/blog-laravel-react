import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import ArticlesPage from './pages/ArticlesPage';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
