import { useNavigate } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';

import { api } from '../../services/api';

export function LogOut() {
  const navigate = useNavigate();

  function handleLogOut() {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    api
      .delete('/sign-out', config)
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');

          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
        setIsloading(false);
      });
  }

  return <FiLogOut onClick={handleLogOut} />;
}
