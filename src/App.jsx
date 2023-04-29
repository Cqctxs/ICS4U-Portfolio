import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {OOP, Search, Recursion, Navbar, Array} from './components';
import About from "./components/About.jsx";

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Routes>
                    <Route path={'/'} element={<About/>}/>
                    <Route path={'/oop'} element={<OOP/>}/>
                    <Route path={'/arrays'} element={<Array/>}/>
                    <Route path={'/search'} element={<Search/>}/>
                    <Route path={'/recursion'} element={<Recursion/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App
