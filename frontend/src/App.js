import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Pages & Components
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route                        // Needs 2 different props
              path="/"                    // one slash means the default or the whole page
              element={<Home/>}           // element refers to what we want to render
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;



/*Notes:
- Install react-router-dom so we can have multiple pages to this application
- npm install react-router-dom 
*/