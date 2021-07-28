import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignUpPage';
import { appendAdLink, homeLink, loginLink, signupLink } from './Links';
import AppendAdPage from './pages/Main/AppendAdPage';
import NotFoundPage from './pages/Main/NotFoundPage';
import { useSelector } from 'react-redux';
import { selectAuthState } from './redux/slices/authSlice';
import PersonalAccountPage from './pages/Main/PersonalAccountPage';
import LocalStorageService from './services/LocalStorageService';
import MainPage from './pages/Main/MainPage';

const Routes = () => {
  const { user } = useSelector(selectAuthState);
  const isAuth = LocalStorageService.getUser() || user;

  console.log(isAuth);
  return (
    <Container>
      <Switch>
        <Route exact path={homeLink}>
          {isAuth ? <PersonalAccountPage /> : <Redirect to='/login' />}
        </Route>
        <Route exact path={loginLink}>
          {!isAuth ? <LoginPage /> : <Redirect to={homeLink} />}
        </Route>
        <Route exact path={signupLink}>
          {!isAuth ? <SignupPage /> : <Redirect to={homeLink} />}
        </Route>
        <Route exact path={appendAdLink}>
          {isAuth ? <AppendAdPage /> : <Redirect to={loginLink} />}
        </Route>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
