import React from 'react';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {green, purple, blueGrey, lightBlue} from '@material-ui/core/colors/';
import {MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: lightBlue,
        secondary: green,
    },

});


const AppHeader = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <Paper>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="App"/>
                        <Tab label="About App"/>
                        <Tab label="About Me"/>
                    </Tabs>
                </Paper>
            </React.Fragment>
        </MuiThemeProvider>
    );
}

export default AppHeader;