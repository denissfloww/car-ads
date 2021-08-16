import { Switch, Route, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignUpPage';
import {appendAdLink, homeLink, loginLink, signupLink, successAppendLink} from './Links';
import AppendAdPage from './pages/Main/AppendAdPage';
import NotFoundPage from './pages/Main/NotFoundPage';
import { useSelector } from 'react-redux';
import { selectAuthState } from './redux/slices/authSlice';
import PersonalAccountPage from './pages/Main/PersonalAccountPage';
import LocalStorageService from './services/LocalStorageService';
import MainPage from './pages/Main/MainPage';
import SuccessAppendPage from "./pages/Main/SuccessAppendPage";

const Routes = () => {
  const { user } = useSelector(selectAuthState);
  const isAuth = user || LocalStorageService.getUser();

  console.log(isAuth);
  return (
    <Container>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/car-ads'>
          <MainPage />
        </Route>
        <Route exact path={homeLink}>
          {isAuth ? <PersonalAccountPage /> : <Redirect to='/login' />}
        </Route>
        <Route exact path={appendAdLink}>
          {isAuth ? <AppendAdPage /> : <Redirect to={loginLink} />}
        </Route>
        <Route exact path={successAppendLink}>
          {isAuth ? <SuccessAppendPage /> : <Redirect to={loginLink} />}
        </Route>
        <Route exact path={loginLink}>
          {!isAuth ? <LoginPage /> : <Redirect to={homeLink} />}
        </Route>
        <Route exact path={signupLink}>
          {!isAuth ? <SignupPage /> : <Redirect to={homeLink} />}
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
