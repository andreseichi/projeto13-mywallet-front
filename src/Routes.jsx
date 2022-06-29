import { Routes as Router, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Router>
  );
}
