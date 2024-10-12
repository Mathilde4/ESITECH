import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const App = () => {
  return (
    
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
          <div className="container-fluid">
            EsiTech
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  Home
                </li>
                <li className="nav-item">
                 
                </li>
                <li className="nav-item">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routing */}
        

        {/* Footer */}
        <footer className="bg-dark text-light text-center p-3 mt-4">
          <p>EsiTech &copy; 2024 - All Rights Reserved</p>
        </footer>
      </div>
    
  );
};

export default App;
