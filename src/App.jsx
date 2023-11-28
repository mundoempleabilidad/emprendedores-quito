import { BrowserRouter as Router} from 'react-router-dom'
import { Footer } from "./components/Footer";
import { Pages } from './components/Pages'
import { DataProvider } from './components/context/DataProvider'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

function App() {
  return (
    <Router>
      <DataProvider>
        <Pages />
      </DataProvider>
      <Footer />
    </Router>
  );
}

export default App
