import { Routes as Router, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Router>
  );
}
