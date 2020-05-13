import React from 'react';
import { Container, Card, Background, Form } from './styles';
import logoImg from '../../assets/react-1.svg';

const Login: React.FC = () => {
  return (
    <Container>
      <Card>
        <Form>
          <img src={logoImg} alt="Logo" />

          <div className="signin-form">
            <h1>Sign In</h1>

            <div className="input-signin-main">
              <div className="input-signin">
                <label>User Name</label>
                <input placeholder="Enter User Name" type="text" />
              </div>

              <div className="input-signin">
                <label>Password</label>
                <input placeholder="Enter Password" type="text" />
              </div>
            </div>

            <a href="Password">Forgot Password?</a>
            <button type="submit">Sign In</button>
          </div>
          <a href="Create an account">Don't have an account? Sign Up</a>
        </Form>
        <Background />
      </Card>
    </Container>
  );
};

export default Login;
