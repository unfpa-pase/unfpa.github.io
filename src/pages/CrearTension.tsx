import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Slider, Dialog, DialogTitle, DialogActions, DialogContentText,  DialogContent, StepLabel, Step, Stepper,TextField,RadioGroup,Radio,FormGroup,FormControlLabel,Select,Paper,IconButton,List,InputLabel,Tooltip,ListItem,Typography,FormControl,ListItemText,Divider,Grid,Button} from '@material-ui/core/';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: '#D9E2EA'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

export default function CrearTension() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const classes = useStyles();

    const [state, setState] = React.useState({
    ods: '',
    dimension: 'checkedPoblacional',
    });

    const [eventDialog, setEventDialog] = React.useState(false);
    const [metaDialog, setMetaDialog] = React.useState(false);
    const [liberadorDialog, setLiberadorDialog] = React.useState(false);
    const [generadorDialog, setGeneradorDialog] = React.useState(false);

    const handleChangeODS = (event:any) => {
    const ods = event.target.ods;
    setState({
        ...state,
        [ods]: event.target.value,
    });
    };

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
    setActiveStep(0);
    };
        function getSteps() {
        return ['', '', ''];
        }

        function getStepContent(stepIndex:any) {
        switch (stepIndex) {
            case 0:
            return(
                <div>
                <Grid container direction="column" alignItems="center" justify="center" style={{marginLeft:20,marginRight:20}}>
                    <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                        <Grid item sm={6} xs={12}>
                            <TextField style={{minWidth:350}} id="NombreEvento" label="Nombre evento" variant="outlined"/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <FormControl variant="outlined" style={{minWidth:350}}>
                                <InputLabel htmlFor="outlined-age-native-simple">Subcategoria</InputLabel>
                                <Select
                                native
                                label="Subcategoria"
                                inputProps={{
                                    name: 'subcategoria',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={1}>1. Fin de la pobreza</option>
                                <option value={2}>2. Hambre cero</option>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}} >
                        <Grid item sm={6} xs={12}>
                            <Typography style={{ textAlign: 'left'}} variant={"h6"} color="primary" display="block" >Objetivo Desarrollo Sostenible</Typography>
                            <FormControl variant="outlined" style={{minWidth:350}}>
                                <InputLabel htmlFor="outlined-age-native-simple">ODS</InputLabel>
                                <Select
                                native
                                label="ODS"
                                inputProps={{
                                    name: 'ods',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={1}>1. Fin de la pobreza</option>
                                <option value={2}>2. Hambre cero</option>
                                <option value={3}>3. Salud y bienestar</option>
                                <option value={4}>4. Educación de calidad</option>
                                <option value={5}>5. Igualdad de género</option>
                                <option value={6}>6. Agua limpia y saneamiento</option>
                                <option value={7}>7. Energía asequible y no contaminante</option>
                                <option value={8}>8. Trabajo decente y crecimiento económico</option>
                                <option value={9}>9. Industria, innovación e infraestructura</option>
                                <option value={10}>10. Reducción de las desigualdades</option>
                                <option value={11}>11. Ciudades y comunidades sostenibles</option>
                                <option value={12}>12. Producción y consumo responsable </option>
                                <option value={13}>13. Acción por el clima </option>
                                <option value={14}>14. Vida Submarina </option>
                                <option value={15}>15. Vida de ecosistemas terrestres </option>
                                <option value={16}>16. Paz, justicia e instituciones sólidas </option>
                                <option value={17}>17. Alianzas para lograr los objetivos </option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={6} xs={12} style={{marginTop:10}}>
                            <Grid container  item direction="row" justify="space-between"> 
                                <Typography  variant={"h6"} color="primary" display="block" >Metas</Typography>
                                <Button variant="contained" onClick = {() => setMetaDialog(true)} style={{marginBottom:10}} size="small" color="primary">
                                    Crear
                                </Button>
                            </Grid>   
                            <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
                                <List component="nav" aria-label="main mailbox folders" style={{minWidth:250}}>
                                    <ListItem button>
                                        <ListItemText primary={`Meta 1 `} />
                                        <Tooltip title="Editar Meta">
                                            <IconButton  size='small' aria-label="editar" >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Duplica Meta">
                                            <IconButton size='small' aria-label="duplicate" >
                                                <FileCopyIcon style={{ color: "#00b4d8" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Elimina Meta">
                                            <IconButton size='small' aria-label="delete" >
                                                <DeleteForeverIcon style={{ color: "#d90429" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary={`Meta 2`} />
                                        <Tooltip title="Editar ">
                                            <IconButton  size='small' aria-label="editar" >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Duplica ">
                                            <IconButton size='small' aria-label="duplicate" >
                                                <FileCopyIcon style={{ color: "#00b4d8" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Elimina ">
                                            <IconButton size='small' aria-label="delete" >
                                                <DeleteForeverIcon style={{ color: "#d90429" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary={`Meta 3`} />
                                        <Tooltip title="Editar ">
                                            <IconButton  size='small' aria-label="editar" >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Duplica ">
                                            <IconButton size='small' aria-label="duplicate" >
                                                <FileCopyIcon style={{ color: "#00b4d8" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Elimina ">
                                            <IconButton size='small' aria-label="delete" >
                                                <DeleteForeverIcon style={{ color: "#d90429" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider />
                                    </ListItem>
                                </List>
                            </Paper>
                            
                        </Grid>
                    </Grid>
                    
                </Grid>
                </div>
            );
            case 1:
                return(
                <div>
                <Grid container direction="row" justify="center" alignItems="center" spacing = {1}>
                    <Grid item sm={6} xs={12}>
                        <Grid container item direction="row" justify="space-between"> 
                            <Typography  variant={"h6"} color="primary" display="block" >Generadores</Typography>
                            <Button variant="contained" onClick = {() => setGeneradorDialog(true)} style={{marginBottom:10}} size="small" color="primary">
                                Crear
                            </Button>
                        </Grid>    
                        <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
                        <List component="nav" aria-label="main mailbox folders" style={{minWidth:350}} >
                            <ListItem button>
                                <ListItemText primary={`Generadores 1 `} />
                                
                                <Tooltip title="Editar ">
                                    <IconButton  aria-label="editar" >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Duplica ">
                                    <IconButton  aria-label="duplicate" >
                                        <FileCopyIcon style={{ color: "#00b4d8" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Elimina ">
                                    <IconButton  >
                                        <DeleteForeverIcon style={{ color: "#d90429" }} />
                                    </IconButton>
                                </Tooltip>
                                
                                <Divider />
                            </ListItem>
                        </List>
                        </Paper>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Grid container item direction="row" justify="space-between"> 
                            <Typography  variant={"h6"} color="primary" display="block" >Liberadores</Typography>
                            <Button variant="contained" onClick = {() => setLiberadorDialog(true)} style={{marginBottom:10}} size="small" color="primary">
                                Crear
                            </Button>
                        </Grid>    
                        <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
                        <List component="nav" aria-label="main mailbox folders" style={{minWidth:350}} >
                            <ListItem button>
                                <ListItemText primary={`Liberadores 1 `} />
                                
                                <Tooltip title="Editar ">
                                    <IconButton  aria-label="editar" >
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Duplica ">
                                    <IconButton  aria-label="duplicate" >
                                        <FileCopyIcon style={{ color: "#00b4d8" }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Elimina ">
                                    <IconButton  >
                                        <DeleteForeverIcon style={{ color: "#d90429" }} />
                                    </IconButton>
                                </Tooltip>
                                
                                <Divider />
                            </ListItem>
                        </List>
                        </Paper>
                    </Grid>
                </Grid>
                </div>
                );
            case 2:
                return(
                <div>
                    <Grid container direction="column" alignItems="center" justify="center" style={{marginLeft:20,marginRight:20}}>
                        <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                            <Grid item sm={6} xs={12}>
                                <TextField style={{minWidth:350}} id="Nombre" label="Nombre" variant="outlined"/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField style={{minWidth:350}} id="Apellido" label="Apellido" variant="outlined"/>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}} >
                            <Grid item sm={3} xs={6}>
                                <FormControl variant="outlined" style={{minWidth:155}}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Edad</InputLabel>
                                    <Select
                                    native
                                    label="Edad"
                                    inputProps={{
                                        name: 'edad',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={10}>10-20</option>
                                    <option value={20}>20-30</option>
                                    <option value={30}>30-40</option>
                                    <option value={40}>40-50</option>
                                    <option value={50}>50-60</option>
                                    <option value={60}>60-70</option>
                                    <option value={70}>70-80</option>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={3} xs={6}>
                                <FormControl variant="outlined" style={{minWidth:155}}>
                                    <InputLabel htmlFor="outlined-age-native-simple">Género</InputLabel>
                                    <Select
                                    native
                                    label="Género"
                                    inputProps={{
                                        name: 'genero',
                                        id: 'outlined-age-native-simple',
                                    }}
                                    >
                                    <option aria-label="None" value="" />
                                    <option value={1}>Femenino</option>
                                    <option value={2}>Masculino</option>
                                    
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField style={{minWidth:350}} id="cedula" label="Cedula" variant="outlined"/>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                            <Grid item sm={6} xs={12}>
                                <TextField style={{minWidth:350}} id="queGrupo" label="¿Qué grupo representan?" variant="outlined"/>
                            </Grid>
                            <Grid item sm={6} xs={12}>
                                <TextField style={{minWidth:350}} id="sector" label="¿Qué sector?" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                );
            default:
            return 'Unknown stepIndex';
        }
        }

        function crearMeta(){
            return(
                <div >
                    <TextField style={{minWidth:180}} id="NombreMeta" label="Nombre Meta" variant="outlined"/>
                </div>
            );
        }

        function crearLiberador(){
            return(
                <div >
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                        <Grid  item>
                            <Typography style={{ textAlign: 'left'}} variant={"h5"} color="primary" display="block" >Liberador</Typography>
                        </Grid>
                        <Grid  item container xs={12} direction="row" justify="center">
                            <Grid item  xs={6}>
                                <TextField style={{minWidth:110}} id="NombreLiberador" label="Nombre Liberador" variant="outlined"/>
                            </Grid>
                            <Grid item  xs={6}>
                                <TextField style={{minWidth:110}} id="factoresLiberadores" label="FactoresLiberadores" variant="outlined"/>
                            </Grid>
                        </Grid>    
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: 'left'}} variant={"h6"} color="primary" display="block" >Dimensión</Typography>
                            <FormGroup row>
                                <RadioGroup row aria-label="position" name="position" defaultValue="checkedPoblacional">
                                    <FormControlLabel value="checkedPoblacional" control={<Radio  color="primary" />} label="Poblacional" />
                                    <FormControlLabel value="checkedAmbiental" control={<Radio color="primary" />} label="Ambiental" />
                                    <FormControlLabel value="checkedSocial" control={<Radio  color="primary" />} label="Social" />
                                    <FormControlLabel value="checkedEconómica" control={<Radio  color="primary" />} label="Económica" />
                                </RadioGroup>
                            </FormGroup> 
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: 'left'}} variant={"h6"} color="primary" display="block" >Objetivo Desarrollo Sostenible</Typography>
                            <FormControl variant="outlined" >
                                <InputLabel htmlFor="outlined-age-native-simple">ODS</InputLabel>
                                <Select
                                native
                                label="ODS"
                                inputProps={{
                                    name: 'ods',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={1}>1. Fin de la pobreza</option>
                                <option value={2}>2. Hambre cero</option>
                                <option value={3}>3. Salud y bienestar</option>
                                <option value={4}>4. Educación de calidad</option>
                                <option value={5}>5. Igualdad de género</option>
                                <option value={6}>6. Agua limpia y saneamiento</option>
                                <option value={7}>7. Energía asequible y no contaminante</option>
                                <option value={8}>8. Trabajo decente y crecimiento económico</option>
                                <option value={9}>9. Industria, innovación e infraestructura</option>
                                <option value={10}>10. Reducción de las desigualdades</option>
                                <option value={11}>11. Ciudades y comunidades sostenibles</option>
                                <option value={12}>12. Producción y consumo responsable </option>
                                <option value={13}>13. Acción por el clima </option>
                                <option value={14}>14. Vida Submarina </option>
                                <option value={15}>15. Vida de ecosistemas terrestres </option>
                                <option value={16}>16. Paz, justicia e instituciones sólidas </option>
                                <option value={17}>17. Alianzas para lograr los objetivos </option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container  item direction="row" justify="space-between"> 
                                <Typography  variant={"h6"} color="primary" display="block" >Metas</Typography>
                                <Button variant="contained" onClick = {() => setMetaDialog(true)} style={{marginBottom:10}} size="small" color="primary">
                                    Crear
                                </Button>
                            </Grid>   
                            <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
                                <List component="nav" aria-label="main mailbox folders" style={{minWidth:350}}>
                                    <ListItem button>
                                        <ListItemText primary={`Meta 1 `} />
                                        <Tooltip title="Editar Meta">
                                            <IconButton  size='small' aria-label="editar" >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Duplica Meta">
                                            <IconButton size='small' aria-label="duplicate" >
                                                <FileCopyIcon style={{ color: "#00b4d8" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Elimina Meta">
                                            <IconButton size='small' aria-label="delete" >
                                                <DeleteForeverIcon style={{ color: "#d90429" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            );
        }

        function crearGenerador(){
            return(
                <div >
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                        <Grid  item>
                            <Typography style={{ textAlign: 'left'}} variant={"h5"} color="primary" display="block" >Generador</Typography>
                        </Grid>
                        <Grid  item container xs={12} direction="row" justify="center">
                            <Grid item  xs={6}>
                                <TextField style={{minWidth:110}} id="NombreGeneradores" label="NombreGeneradores" variant="outlined"/>
                            </Grid>
                            <Grid item  xs={6}>
                                <TextField style={{minWidth:110}} id="factoresGeneradores" label="FactoresGeneradores" variant="outlined"/>
                            </Grid>
                        </Grid>    
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: 'left'}} variant={"h6"} color="primary" display="block" >Dimensión</Typography>
                            <FormGroup row>
                                <RadioGroup row aria-label="position" name="position" defaultValue="checkedPoblacional">
                                    <FormControlLabel value="checkedPoblacional" control={<Radio  color="primary" />} label="Poblacional" />
                                    <FormControlLabel value="checkedAmbiental" control={<Radio color="primary" />} label="Ambiental" />
                                    <FormControlLabel value="checkedSocial" control={<Radio  color="primary" />} label="Social" />
                                    <FormControlLabel value="checkedEconómica" control={<Radio  color="primary" />} label="Económica" />
                                </RadioGroup>
                            </FormGroup> 
                        </Grid>
                        <Grid item xs={12}>
                            <Typography style={{ textAlign: 'left'}} variant={"h6"} color="primary" display="block" >Objetivo Desarrollo Sostenible</Typography>
                            <FormControl variant="outlined" >
                                <InputLabel htmlFor="outlined-age-native-simple">ODS</InputLabel>
                                <Select
                                native
                                label="ODS"
                                inputProps={{
                                    name: 'ods',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option aria-label="None" value="" />
                                <option value={1}>1. Fin de la pobreza</option>
                                <option value={2}>2. Hambre cero</option>
                                <option value={3}>3. Salud y bienestar</option>
                                <option value={4}>4. Educación de calidad</option>
                                <option value={5}>5. Igualdad de género</option>
                                <option value={6}>6. Agua limpia y saneamiento</option>
                                <option value={7}>7. Energía asequible y no contaminante</option>
                                <option value={8}>8. Trabajo decente y crecimiento económico</option>
                                <option value={9}>9. Industria, innovación e infraestructura</option>
                                <option value={10}>10. Reducción de las desigualdades</option>
                                <option value={11}>11. Ciudades y comunidades sostenibles</option>
                                <option value={12}>12. Producción y consumo responsable </option>
                                <option value={13}>13. Acción por el clima </option>
                                <option value={14}>14. Vida Submarina </option>
                                <option value={15}>15. Vida de ecosistemas terrestres </option>
                                <option value={16}>16. Paz, justicia e instituciones sólidas </option>
                                <option value={17}>17. Alianzas para lograr los objetivos </option>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container  item direction="row" justify="space-between"> 
                                <Typography  variant={"h6"} color="primary" display="block" >Metas</Typography>
                                <Button variant="contained" onClick = {() => setMetaDialog(true)} style={{marginBottom:10}} size="small" color="primary">
                                    Crear
                                </Button>
                            </Grid>   
                            <Paper elevation={3} style={{ backgroundColor: "#F0EDE7"}}>
                                <List component="nav" aria-label="main mailbox folders" style={{minWidth:350}}>
                                    <ListItem button>
                                        <ListItemText primary={`Meta 1 `} />
                                        <Tooltip title="Editar Meta">
                                            <IconButton  size='small' aria-label="editar" >
                                                <EditIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Duplica Meta">
                                            <IconButton size='small' aria-label="duplicate" >
                                                <FileCopyIcon style={{ color: "#00b4d8" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Elimina Meta">
                                            <IconButton size='small' aria-label="delete" >
                                                <DeleteForeverIcon style={{ color: "#d90429" }} />
                                            </IconButton>
                                        </Tooltip>
                                        <Divider />
                                    </ListItem>
                                
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            );
        }
  return (
    <div style={{ backgroundColor: "#F0EDE7", minHeight: "100vh" ,  overflowX: 'hidden', overflowY: 'hidden'}}>
        <Header/>
        <div style={{ marginTop: 80}}>
            <Stepper activeStep = {activeStep} alternativeLabel style={{backgroundColor: '#F0EDE7'}}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>
            <Grid container direction="row" justify="center" alignItems="center">
                {activeStep === steps.length ? (
                <div>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={8}>
                        <Grid item xs={12} >
                            <Typography  variant={"h5"} color="secondary" display="block">La tensión ha sido creada</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Button variant="contained" href="/#tensiones" color="primary" onClick={handleReset}>Volver a lista de tensiones</Button>  
                        </Grid>
                    </Grid>
                    
                </div>
                ) : (
                <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <br></br> 
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                        >
                            Anterior
                        </Button>

                        <Button variant="contained" color="primary" onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Crear' : 'Siguiente'}
                        </Button>
                    </Grid>
                </div>
                )}
            </Grid>
            <Dialog open={liberadorDialog !== false} onClose={() => setLiberadorDialog(false)}>
                <DialogContent>
                    <DialogContentText>
                        {crearLiberador()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setLiberadorDialog(false)} color="primary">
                    Cancelar
                </Button>
                    <Button onClick={() => setLiberadorDialog(false)} color="primary" autoFocus>
                    Crear
                </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={generadorDialog !== false} onClose={() => setGeneradorDialog(false)}>
                <DialogContent>
                    <DialogContentText>
                        {crearGenerador()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setGeneradorDialog(false)} color="primary">
                    Cancelar
                </Button>
                    <Button onClick={() => setGeneradorDialog(false)} color="primary" autoFocus>
                    Crear
                </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={metaDialog !== false} onClose={() => setMetaDialog(false)}>
                <DialogTitle >{"Crear Meta"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {crearMeta()}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setMetaDialog(false)} color="primary">
                    Cancelar
                </Button>
                    <Button onClick={() => setMetaDialog(false)} color="primary" autoFocus>
                    Crear
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    </div>   
   
  );
}
