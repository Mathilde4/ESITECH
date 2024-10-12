import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './Contact.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './Contact.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
