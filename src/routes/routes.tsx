import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import BankOfHours from '../pages/banco-horas';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/bank" element={<BankOfHours />} />
                
            </Routes>
        </Router>
    );
};

export default AppRoutes;