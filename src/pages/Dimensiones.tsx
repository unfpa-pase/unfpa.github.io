import React from 'react';
import "../css/styles.css";
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { Container, Button, Divider, Paper, Typography, Grid, useTheme, useMediaQuery } from "@material-ui/core";

import Ambiental from "../images/Home/Ambiental.png";
import Social from "../images/Home/Social.png";
import Economica from "../images/Home/Economica.png";
import Poblacional from "../images/Home/Poblacional.png";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
export default function Tensiones() {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <div style={{ backgroundColor: "#F0EDE7", minHeight: "100vh" ,  overflowX: 'hidden', overflowY: 'hidden'}}>
            <Header/>
            <Container >
                <Grid container justify='center'>
                    <Grid item xs={12} md={7} style={{ margin: 20 }} >
                        <Typography style={{ textAlign: 'center', margin: 25 ,marginTop:80}} variant={"h5"} color="primary" display="block">Tensiones por dimensión</Typography>
                                
                        <Button href="/#" variant="contained" color="primary" > Volver</Button>
                                   
                        <Divider style={{ marginTop: 15 }} />
                        
                        <Grid item>
                            <Link href="/tensiones" to={`/tensiones`} style={{ textDecoration: 'none' }}>
                                <Paper style={{ padding: 12, position: "relative", borderRadius: 5, marginBottom: 15, marginTop: 15 }} elevation={3}>
                                    <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                                        <Grid item sm={2} xs={5}>
                                            <img src={Poblacional} style={{ borderRadius: 5, width: "60%", height: "60%" }} />
                                        </Grid>
                                        <Grid item sm={9} xs={6}>
                                            <Typography style={{ textAlign: 'left', color:'black' }} variant={isMobileOrTablet ? "body2" : "body1"} color="primary" display="block">Poblacional</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <ArrowForwardIosIcon/>
                                        </Grid>
                                    </Grid> 
                                </Paper>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link href="/tensiones" to={`/tensiones`} style={{ textDecoration: 'none' }}>
                                <Paper style={{ padding: 12, position: "relative", borderRadius: 5, marginBottom: 15, marginTop: 15 }} elevation={3}>
                                    <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                                        <Grid item sm={2} xs={5}>
                                            <img src={Ambiental} style={{ borderRadius: 5, width: "60%", height: "60%" }} />
                                        </Grid>
                                        <Grid item sm={9} xs={6}>
                                            <Typography style={{ textAlign: 'left', color:'black' }} variant={isMobileOrTablet ? "body2" : "body1"} color="primary" display="block">Ambiental</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <ArrowForwardIosIcon/>
                                        </Grid>
                                    </Grid> 
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/tensiones" to={`/tensiones`} style={{ textDecoration: 'none' }}>
                                <Paper style={{ padding: 12, position: "relative", borderRadius: 5, marginBottom: 15, marginTop: 15 }} elevation={3}>
                                    <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                                        <Grid item sm={2} xs={5}>
                                            <img src={Social} style={{ borderRadius: 5, width: "60%", height: "60%" }} />
                                        </Grid>
                                        <Grid item sm={9} xs={6}>
                                            <Typography style={{ textAlign: 'left', color:'black' }} variant={isMobileOrTablet ? "body2" : "body1"} color="primary" display="block">Social</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <ArrowForwardIosIcon/>
                                        </Grid>
                                    </Grid> 
                                </Paper>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/tensiones" to={`/tensiones`} style={{ textDecoration: 'none' }}>
                                <Paper style={{ padding: 12, position: "relative", borderRadius: 5, marginBottom: 15, marginTop: 15 }} elevation={3}>
                                    <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                                        <Grid item sm={2} xs={5}>
                                            <img src={Economica} style={{ borderRadius: 5, width: "60%", height: "60%" }} />
                                        </Grid>
                                        <Grid item sm={9} xs={6}>
                                            <Typography style={{ textAlign: 'left', color:'black' }} variant={isMobileOrTablet ? "body2" : "body1"} color="primary" display="block">Economica</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <ArrowForwardIosIcon/>
                                        </Grid>
                                    </Grid> 
                                </Paper>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
