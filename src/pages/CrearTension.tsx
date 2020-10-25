import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Slider, TextareaAutosize, FormGroup, Checkbox, FormControlLabel, Typography, TextField, Button, StepLabel, Step, Stepper, Grid} from "@material-ui/core";

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
  return ['', '', '', '', ''];
}

function handleCheckboxChange(){
    return(
        <div>
            Hola
        </div>

    );
}

function getStepContent(stepIndex:any) {
  switch (stepIndex) {
    case 0:
      return(
        <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
            <Grid  item xs={12} >
                <TextField id="nombre" label="Nombre" defaultValue="Nombre de la tensión" variant="outlined"  style = {{minWidth:700}}/>
            </Grid>
            <Grid  item xs={12} >
                <TextField id="dimension" label="Dimensión Prioritaria" defaultValue="Dimensión Prioritaria" variant="outlined"  style = {{minWidth:700}}/>
            </Grid>
            <Grid  item xs={12} >
                <TextField id="componente" label="Componente" defaultValue="Ingresar componente" variant="outlined" helperText="Componentes asociados a las competencias sectoriales, describe el componente de la dimesión prioritaria." style = {{minWidth:700}}/>
            </Grid>
            <Grid  item xs={12}  >
                <TextField id="areasObservacion" label="Areas de observación" defaultValue="Areas de observación" variant="outlined"  style = {{minWidth:700}}/>
            </Grid>
        </Grid>
      );
    case 1:
        return(
            <Grid container direction="column" justify="center" alignItems="center" spacing={4}>
                <Grid  item xs={12}>
                    <Typography  variant={"h5"} color="primary" display="block">Descripción de la tensión</Typography>
                </Grid>
                <Grid  item xs={12}>
                <TextareaAutosize placeholder="Descripción de la tensión" style={{ minHeight: 300,minWidth: 650 }} />  
                </Grid>     
            </Grid>
        );
    case 2:
      return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
            <Grid item>
                <Typography  variant={"h5"} color="primary" display="block">Dimensiones involucradas</Typography>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" spacing={8}>

                <Grid item xs={3} >
                    <Typography  variant={"h5"} color="primary" display="block">Generador</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={true} onChange={handleCheckboxChange} name="gilad" />}
                            label="Poblacional"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Ambiental"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Social"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Institucional"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Económica"
                            color="primary"
                        />
                    </FormGroup>
                </Grid>

                <Grid item xs={3} >
                    <Typography  variant={"h5"} color="secondary" display="block">Polo A</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color="secondary" checked={true} onChange={handleCheckboxChange} name="gilad" />}
                            label="Poblacional"
                            color="secondary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Ambiental"
                            color="secondary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Social"
                            color="secondary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Institucional"
                            color="secondary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Económica"
                            color="secondary"
                        />
                    </FormGroup>
                </Grid>

                <Grid item xs={3} >
                    <Typography  variant={"h5"} color="primary" display="block">Polo B</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={true} onChange={handleCheckboxChange} name="gilad" />}
                            label="Poblacional"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Ambiental"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Social"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Institucional"
                            color="primary"
                        />
                        <FormControlLabel
                            control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Económica"
                            color="primary"
                        />
                    </FormGroup>
                </Grid>

                <Grid item xs={3} >
                    <Typography  variant={"h5"} color="secondary" display="block">Implicación</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={true} onChange={handleCheckboxChange} name="gilad" />}
                            label="Poblacional"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Ambiental"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Social"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleCheckboxChange} name="jason" />}
                            label="Institucional"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={false} onChange={handleCheckboxChange} name="antoine" />}
                            label="Económica"
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <Grid item>
                <Typography  variant={"h5"} color="primary" display="block">  </Typography>
            </Grid>
        </Grid>
        
      );
    case 3:
        return(
            <Grid container direction="row" justify="center" alignItems="center" spacing={1} > 
                <Grid container item xs={12} justify="center" alignItems="center">
                    <Typography  variant={"h5"} color="primary" display="block">Valoración de las tensiones</Typography>
                </Grid>
                <Grid container item xs={12} justify="center" alignItems="center">
                    <Grid item xs={6} direction="column" justify="center" alignItems="center" spacing={1} > 
                        <Grid item xs={6} >
                            <Typography color="primary" display="block">I. Intensidad (gravedad)</Typography>
                            <Slider aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography color="secondary" display="block">C Cronicidad (Duración)</Typography>
                            <Slider color="secondary" aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} direction="column" justify="center" alignItems="center" spacing={1} > 
                        <Grid item xs={6} >
                            <Typography color="secondary" display="block">Ip. Impacto</Typography>
                            <Slider color="secondary" aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                        </Grid> 
                        <Grid item xs={6} >
                            <Typography color="primary" display="block">Ingobernabilidad</Typography>
                            <Slider aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    case 4:
      return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={2} >
            <Grid item>
                <Typography  variant={"h5"} color="primary" display="block">Dimensiones involucradas</Typography>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" style={{marginLeft:150,marginRight:150}}>
                <Grid item xs={6} >
                    <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={12} >
                            <Typography  variant={"h6"} color="primary" display="block">Reforzadores</Typography>
                        </Grid>
                        <Grid item xs={12} >  
                            <TextareaAutosize placeholder="Factores Reforzadores" style={{ minHeight: 60,minWidth: 440 }} />       
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} >
                                <Typography color="primary" display="block">Dimensiones</Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={true} onChange={handleCheckboxChange} name="gilad" />}
                                        label="Poblacional"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                                        label="Ambiental"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                                        label="Social"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                                        label="Institucional"
                                        color="primary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="primary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                                        label="Económica"
                                        color="primary"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography color="primary" display="block">Valor R</Typography>
                                <Slider aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6} >
                    <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
                        <Grid item xs={12} >
                            <Typography  variant={"h6"} color="secondary" display="block">Liberadores</Typography>
                        </Grid>
                        <Grid item xs={12} >  
                            <TextareaAutosize placeholder="Factores Liberadores" style={{ minHeight: 60,minWidth: 440 }} />       
                        </Grid>
                        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                            <Grid item xs={6} >
                                <Typography color="secondary" display="block">Dimensiones</Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" checked={true} onChange={handleCheckboxChange} name="gilad" />}
                                        label="Poblacional"
                                        color="secondary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                                        label="Ambiental"
                                        color="secondary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                                        label="Social"
                                        color="secondary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="jason" />}
                                        label="Institucional"
                                        color="secondary"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox color="secondary" checked={false} onChange={handleCheckboxChange} name="antoine" />}
                                        label="Económica"
                                        color="secondary"
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={6} >
                                <Typography color="secondary" display="block">Valor R</Typography>
                                <Slider aria-labelledby="continuous-slider" style={{maxWidth:160}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography  variant={"h5"} color="primary" display="block">  </Typography>
            </Grid>
        </Grid>
        
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
    <div className="fondo3">
        <div className={classes.root}>
            <Typography style={{ textAlign: 'center', margin: 25 }} variant={"h4"} color="primary" display="block">Crear tensión</Typography>

            <Stepper activeStep = {activeStep} alternativeLabel style={{backgroundColor: '#D9E2EA'}}>
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
                            <Button variant="contained" href="/#tensiones" color="secondary" onClick={handleReset}>Volver a lista de tensiones</Button>  
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
