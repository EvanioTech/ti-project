import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                
            </Routes>
        </Router>
    );
};

export default AppRoutes;