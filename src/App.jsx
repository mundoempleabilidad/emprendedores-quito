import { BrowserRouter as Router} from 'react-router-dom'
import { Footer } from "./components/Footer";
import { Pages } from './components/Pages'
import { DataProvider } from './components/context/DataProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Pages />
        </Router>
      </DataProvider>
      <Footer />
    </>
  );
}

export default App
