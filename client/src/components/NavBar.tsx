import {
    AppBar, Box,
    Button,
    Container, IconButton, Tab, Tabs,
    Toolbar, Typography
} from "@material-ui/core";
import React from "react";
import { useNavStyles } from "../styles/muiStyles";

const NavBar = () => {
    const classes = useNavStyles();
    return (
        <Container maxWidth="lg" className={classes.container}>
            <Box display="flex" bgcolor="grey.200" p={2} width="auto" alignItems="center">
                <Typography>React-bootstrap</Typography>
                <Box>
                    <Button>Вход и регистрация</Button>
                    <Button color="primary">Link</Button>
                </Box>
                <Box flexGrow={1} textAlign="right">

                </Box>
            </Box>
        </Container>
    );
}

export default NavBar;