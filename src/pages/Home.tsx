import React from 'react';
import "../css/styles.css";
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Link, useMediaQuery,useTheme, Button, Grid} from '@material-ui/core';
import Logo from '../images/Home/UnfpaLogo.png'; 
import Lorenz from '../images/Home/Lorenz.png'; 

export default function Home() {
    return(
        <div style={{ backgroundColor: "#FF9C00", minHeight: "100vh" ,  overflowX: 'hidden', overflowY: 'hidden'}}>
            <Grid container direction="row" justify="center"  alignItems="center" spacing={3}>
                <Grid item container justify="center" spacing={3} alignItems="center" direction="column" xs={12} sm={6}>
                    <Grid item xs={12} >
                        <img alt="complex" src={Logo} style={{ display: 'block', marginTop:"15%", maxWidth: '45%',minWidth: '35%', marginLeft:'30%',marginRight:'30%'}}/>
                    </Grid>
                    <Grid  item xs={12} >
                        <Button href="/#dimensiones" variant="contained" color="secondary" style={{maxWidth: '300px', minWidth: '300px'}}>Ejercicios</Button>  
                    </Grid> 
                    <Grid  item xs={12} >
                        <Button variant="contained" color="secondary" style={{maxWidth: '300px', minWidth: '300px'}}>Ver datos</Button>  
                    </Grid>
                    <Grid  item xs={12} >
                        <Button variant="contained" color="secondary" style={{maxWidth: '300px', minWidth: '300px'}}>Ver gráficas</Button>  
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img alt="complex" src={Lorenz} style={{ display: 'block',maxWidth: '70%',minWidth: '50%', marginTop:"10%", marginBottom:"10%", marginLeft:'10%',marginRight:'10%'}}/>
                </Grid>
            </Grid>
        </div>
    );
}