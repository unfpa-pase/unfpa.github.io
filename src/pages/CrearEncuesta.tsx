import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Slider, TextareaAutosize, Checkbox, StepLabel, Step, Stepper,TextField,RadioGroup,Radio,FormGroup,FormControlLabel,Select,Paper,IconButton,List,InputLabel,Tooltip,ListItem,Typography,FormControl,ListItemText,Divider,Grid,Button} from '@material-ui/core/';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Header from '../components/Header';

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

function getSteps() {
  return ['', '', '',''];
}

function getStepContent(stepIndex:any) {
    
  switch (stepIndex) {
    case 0:
      return(
        <div>
        <Grid container direction="column" alignItems="center" justify="center" style={{marginLeft:20,marginRight:20}}>
            <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                <Grid item sm={6} xs={12}>
                    <TextField style={{minWidth:350}} id="NombreTension" label="Nombre tensión" variant="outlined"/>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <TextField style={{minWidth:350}} id="competencia" label="Competencia" variant="outlined"/>
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
    case 1:
        return(
        <div>
            <Typography style={{ textAlign: 'center', marginBottom: 20}} variant={"h5"} color="primary">Evento</Typography>

            <Grid container direction="column" alignItems="center" justify="center" style={{marginLeft:20,marginRight:20}}>
                <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                    <Grid item sm={6} xs={12}>
                        <TextField style={{minWidth:350}} id="quePasa" label="¿Qué pasa?" variant="outlined"/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField style={{minWidth:350}} id="cuanto" label="¿Cuánto?" variant="outlined"/>
                    </Grid>
                </Grid>
                <Grid container item xs={12} direction="row" justify="center" style={{marginTop:10}}>
                    <Grid item sm={6} xs={12}>
                        <TextField style={{minWidth:350}} id="donde" label="¿Dónde?" variant="outlined"/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField style={{minWidth:350}} id="haceCuando" label="¿Hace cuánto tiempo?" variant="outlined"/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        );
    case 2:
        return(
            <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid  item xs={12}>
                    <Typography  variant={"h5"} color="primary" display="block">Generadores</Typography>
                </Grid>
                <Grid  item xs={12}>
                    <TextareaAutosize placeholder="¿Quién hace qué?" style={{ minHeight: 300,minWidth: 650, backgroundColor: "#F0EDE7" }} />  
                </Grid>     
            </Grid>
        );
    case 3:
        return(
            <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid  item xs={12}>
                    <Typography  variant={"h5"} color="primary" display="block">Implicadores</Typography>
                </Grid>
                <Grid  item xs={12}>
                    <TextareaAutosize placeholder="¿A quién qué? " style={{ minHeight: 300,minWidth: 650, backgroundColor: "#F0EDE7" }} />  
                </Grid>     
            </Grid>
        );
    default:
      return 'Unknown stepIndex';
  }
}

export default function CrearTension() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const classes = useStyles();

    const [state, setState] = React.useState({
    nombre:'',
    apellido:'',
    edad: '',
    cedula: '',
    grupo : "Estudiantes Universitarios",
    sector : "Bogota",
    infoRelevante : "No hay informacion relevante",
    quePasa : "Pasa una situación",
    cuanto : "Todos los dias",
    donde : "En la casa",
    haceCuanto : "Desde que inicio la cuarentena",
    quienHaceQue : "Los estudiantes",
    aQuienQue : "A los demás"
    });

    
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
                            <Button variant="contained" href="/#encuestas" color="primary" onClick={handleReset}>Volver a lista de encuestas</Button>  
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
    </div>
    </div>   
   
  );
}