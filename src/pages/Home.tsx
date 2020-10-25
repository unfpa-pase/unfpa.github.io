import React from 'react';
import "../css/styles.css";
import {Paper, Link, useMediaQuery,useTheme, Button, Grid} from '@material-ui/core';
import Logos from '../images/Logos.png'; 


export default function Home() {
    return(
        <div className="fondo1">
            <Grid container direction="column" justify="center" alignItems="center" spacing={3} >
                <Grid  item xs={12} spacing={3}>
                    <img alt="complex" src={Logos} style={{ display: 'block',maxWidth: '40%',minWidth: '20%', marginTop:50, marginLeft:'30%',marginRight:'30%'}}/>
                </Grid> 
                <Grid  item xs={12} spacing={3}>
                    <Button href="/#tensiones" variant="contained" color="primary" style={{maxWidth: '300px', minWidth: '300px'}}>Matriz de tensiones</Button>  
                </Grid> 
                <Grid  item xs={12} spacing={3}>
                    <Button variant="contained" color="primary" style={{maxWidth: '300px', minWidth: '300px'}}>Encuesta expertos locales</Button>  
                </Grid>
                <Grid  item xs={12} spacing={3}>
                    <Button variant="contained" color="primary" style={{maxWidth: '300px', minWidth: '300px'}}>Ver gráficas</Button>  
                </Grid>
            </Grid>  
        </div>
    );
}