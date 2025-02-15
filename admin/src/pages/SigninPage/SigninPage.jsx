import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import apiReq from '../../lib/apiReq';
import { AdminAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminPanelIcon from '@mui/icons-material/AdminPanelSettings';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import { blue } from '@mui/material/colors';

export const SigninPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { updateAdmin } = useContext(AdminAuthContext);
  const navigate = useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) {
      toast.error('Please fill out all fields.');
      return;
    }

    try {
      console.log("first")
      const res = await apiReq.post('/auth/admin/signin', {
        username,
        password,
      });
      console.log(res)

      updateAdmin(res.data);
      navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signinPage">
      <div className="overlay"></div>
      <div className="container">
        <div className="header-section">
          <div className="header">
            <h1>JIVA</h1>
          </div>
        </div>

        <div className="form-section">
          <h3>Welcome Back!</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="single-input">
              <label htmlFor="username">Username</label>
              <div className="input">
                <AdminPanelIcon className="icon" />
                <input
                  type="username"
                  name="username"
                  placeholder="Enter Admin Username"
                />
              </div>
            </div>
            <div className="single-input">
              <label htmlFor="password">Password</label>
              <div className="input">
                <LockIcon className="icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="signin-btn">
              <span>Sign in</span>
              <LoginIcon className="icon" />
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
