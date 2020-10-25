import React from 'react';
import "../css/styles.css";
import { Container, Button, DialogTitle, DialogContentText, Divider, IconButton, Paper, Dialog, DialogActions, DialogContent, Typography, Grid, Tooltip, useTheme, useMediaQuery } from "@material-ui/core";
import Dimension1 from "../images/Dimensiones/Dimension1.png";
import { useHistory, Link } from 'react-router-dom';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
export default function Tensiones() {
    const theme = useTheme();
    const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <div className="fondo2">
            <Container >
                <Grid container justify='center'>
                    

                    <Grid item xs={12} md={7} style={{ margin: 20 }} >
                        <Typography style={{ textAlign: 'center', margin: 25 }} variant={"h4"} color="primary" display="block">Mis Tensiones</Typography>
                                <Grid container justify="flex-end" spacing = {2}>
                                    <Grid item>
                                        <Button href="/#" variant="contained" color="primary" > Volver</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button href="/#creartension" variant="contained" color="primary" > Crear tensión</Button>
                                    </Grid>
                                </Grid>
                        <Divider style={{ marginTop: 15 }} />
                        
                        <Grid item>
                            <Paper style={{ padding: 12, position: "relative", borderRadius: 5, marginBottom: 15, marginTop: 15 }} elevation={3}>
                                <Grid container alignItems="center" justify="space-between" wrap="nowrap">
                                    <Grid item xs={2}>
                                    <img src={Dimension1} style={{ borderRadius: 5, width: "100%", height: "100%" }} />
                                    </Grid>
                                    <Grid item xs={7} style={{ marginLeft: 15 }} >
                                    <Link to={`/templates/&:edit/info&${"0001"}`}>
                                        <Typography style={{ textAlign: 'left' }} variant={isMobileOrTablet ? "body2" : "body1"} color="primary" display="block">Modos y estilos de vida saludables</Typography>
                                        <Typography style={{ textAlign: 'left' }} variant="caption" color="textSecondary" display="block">Dimension 1</Typography>
                                    </Link>
                                    </Grid>
                                    <Grid item container xs={3} justify="flex-end">
                                    <Grid item>
                                        <Tooltip title="Editar este catálogo">
                                        <IconButton  aria-label="editar" >
                                            <EditIcon />
                                        </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item>
                                        <Tooltip title="Duplica este catálogo">
                                        <IconButton  aria-label="duplicate" >
                                            <FileCopyIcon style={{ color: "#00b4d8" }} />
                                        </IconButton>
                                        </Tooltip>
                                    </Grid>
                                        <Tooltip title="Elimina este catálogo">
                                        <IconButton  >
                                            <DeleteForeverIcon style={{ color: "#d90429" }} />
                                        </IconButton>
                                        </Tooltip>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}