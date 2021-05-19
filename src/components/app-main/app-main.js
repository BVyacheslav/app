import React from 'react'
import Magician from '../../images/Magician.png';
import FireBall from '../../images/FireBall.png';
import SpaceBall from '../../images/SpaceBall.png';
import MultiBall from '../../images/MultiBall.png';
import Ball from '../../images/Ball.png';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    margin: {
        margin: theme.spacing(1),
    },

}));

const AppMain = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container
                  justify="center"
                  alignItems="center"
                  className = {classes.margin}
            >
                <Box style = {{marginRight: 300}}>
                <img src={FireBall} /> <br/>
                <img src={FireBall} style = {{marginTop: 50}}/> <br/>
                <img src={FireBall} style = {{marginTop: 50}}/>
                </Box>
            <div>
                <img src={Magician} style = {{width: 300}}/>
            </div>

            </Grid>
{/*              <Grid container item xs={3}
                      alignItems="center"
                      >
                    <img src={FireBall} />
                    <img src={SpaceBall} />
                    <img src={MultiBall} />
                    <img src={Ball} />
                </Grid>
            <Grid
                className = {classes.margin}
                container item xs={6}
                justify="center"
            >
                <img src={Magician} />
            </Grid>*/}
            </>
    )
}

export default AppMain;