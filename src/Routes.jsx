import { Routes as Router, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Deposit } from './pages/Deposit';
import { Withdraw } from './pages/Withdraw';

export function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
    </Router>
  );
}
