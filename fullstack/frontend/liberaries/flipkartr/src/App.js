import Card1 from './components/cards/conatiners/Cards1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Single from './pages/Single';
import Curd from './pages/Curd';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hookspage from './pages/Hookspage';
import WebCamp from './components/webcamp/WebCamp';
import StyledComp from './pages/StyledComp';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/single" element={<Single />} />
                    <Route path="/curd" element={<Curd />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/hook" element={<Hookspage />} />
                    <Route path="/webcamp" element={<WebCamp />} />
                    <Route path="/styled" element={<StyledComp />} />
                </Routes>
            </Router>
        </>
    );
}
