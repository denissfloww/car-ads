import { Switch, Route, Redirect } from 'react-router-dom';
import {Container} from "@material-ui/core";
import LoginPage from './pages/Auth/LoginPage';

const Routes = () => {
    return(
        <Container>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
            </Switch>
        </Container>
    )
}

export default Routes;