import React from 'react';
import "../css/styles.css";
import {Paper,Tooltip,IconButton,List,ListItem,Typography,ListItemIcon,ListItemText,Divider,Grid,Button} from '@material-ui/core/';
import Header from '../components/Header';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

function Menu(){
    return(
        <Grid container justify='center' style={{marginTop: 100}}>
            <Grid item xs={12} md={7} style={{ margin: 20 }} >
                <Typography style={{ textAlign: 'center', margin: 25 }} variant={"h4"} color="primary" display="block">Mis Encuestas</Typography>
                <Grid container justify="flex-end" spacing = {2}>
                    <Grid item>
                        <Button href="/#/" variant="contained" color="primary" > Volver</Button>
                    </Grid>
                    <Grid item>
                        <Button href="/#/encuestas/crear/" variant="contained" color="primary" > Crear encuesta</Button>
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: 15 }} />
            </Grid>
            <Grid item xs={12} md={7} >
                <ListaEncuestas/>
            </Grid>
        </Grid>
    );
}
function ListaEncuestas(){
    return(
        <Grid container justify='center'>
            <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
            <List component="nav" aria-label="main mailbox folders" style={{minWidth:350}}>
                <ListItem button>
                    <ListItemText primary={`Encuesta 1 `} />
                    
                    <Tooltip title="Editar este catálogo">
                        <IconButton  aria-label="editar" >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Duplica este catálogo">
                        <IconButton  aria-label="duplicate" >
                            <FileCopyIcon style={{ color: "#00b4d8" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Elimina este catálogo">
                        <IconButton  >
                            <DeleteForeverIcon style={{ color: "#d90429" }} />
                        </IconButton>
                    </Tooltip>
                    
                    <Divider />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Encuesta 2 `} />
                    
                    <Tooltip title="Editar este catálogo">
                        <IconButton  aria-label="editar" >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Duplica este catálogo">
                        <IconButton  aria-label="duplicate" >
                            <FileCopyIcon style={{ color: "#00b4d8" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Elimina este catálogo">
                        <IconButton  >
                            <DeleteForeverIcon style={{ color: "#d90429" }} />
                        </IconButton>
                    </Tooltip>
                    
                    <Divider />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Encuesta 3 `} />
                    
                    <Tooltip title="Editar este catálogo">
                        <IconButton  aria-label="editar" >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Duplica este catálogo">
                        <IconButton  aria-label="duplicate" >
                            <FileCopyIcon style={{ color: "#00b4d8" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Elimina este catálogo">
                        <IconButton  >
                            <DeleteForeverIcon style={{ color: "#d90429" }} />
                        </IconButton>
                    </Tooltip>
                    
                    <Divider />
                </ListItem>
                <ListItem button>
                    <ListItemText primary={`Encuesta 4 `} />
                    
                    <Tooltip title="Editar este catálogo">
                        <IconButton  aria-label="editar" >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Duplica este catálogo">
                        <IconButton  aria-label="duplicate" >
                            <FileCopyIcon style={{ color: "#00b4d8" }} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Elimina este catálogo">
                        <IconButton  >
                            <DeleteForeverIcon style={{ color: "#d90429" }} />
                        </IconButton>
                    </Tooltip>
                    
                    <Divider />
                </ListItem>
            </List>
            </Paper>
        </Grid>
    );
}
  
export default function Encuestas() {
    return(
        
        <div style={{ backgroundColor: "#F0EDE7", minHeight: "100vh" ,  overflowX: 'hidden', overflowY: 'hidden'}}>
            <Header/>
            <Menu/>

        </div>
    );
}
