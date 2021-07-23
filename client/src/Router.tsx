import { Switch, Route, Redirect } from 'react-router-dom';
import {Container} from "@material-ui/core";
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from "./pages/Auth/SignUpPage";
import {loginLink, signupLink} from "./Links";
import  NotFoundPage  from "./pages/Main/NotFoundPage"


const Routes = () => {
    return(
        <Container>
            <Switch>
                <Route exact path={loginLink}>
                    <LoginPage />
                </Route>
                <Route exact path={signupLink}>
                    <SignupPage />
                </Route>
                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Container>
    )
}

export default Routes;