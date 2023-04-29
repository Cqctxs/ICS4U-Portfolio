import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {OOP, Search, Recursion, Navbar, Array, About} from './components';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Routes>
                    <Route path={'/ICS4U-Portfolio/'} element={<About/>}/>
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
