import React from 'react';
 import {useHistory} from 'react-router-dom'

 import {makeStyles} from '@material-ui/core/styles';

 import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, TextField, Typography,Grid,Link, Box } from '@material-ui/core';
 import {} from '@material-ui/core';
 import {} from '@material-ui/core';
 import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import CopyRight from '../components/CopyRight';


const useStyles = makeStyles(theme =>({
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems: 'center'
    },
    form:{
        marginTop:theme.spacing(2),
        width:'100%',

    },
    submit:{
        margin: theme.spacing(3,0,2)
    },
    avatar:{
        backgroundColor:theme.palette.secondary.main,
        margin: theme.spacing(1)
    }
}))


 const LoginPage = () => {

const classes = useStyles();

let history = useHistory();

const submit =(e) =>{
e.preventDefault()
{/**history.push({
    pathname: '',
    state:{
        token :'123456789'
    }
})*/}
history.push('/dashboard')
}
    return (
<Container component='main' maxWidth='xs'>

<CssBaseline/>

<div className={classes.paper}>

<Avatar className={classes.avatar}>
<LockOutlinedIcon/>
</Avatar>
<Typography component='h1'>
Acceso
</Typography> 

{/**TODO Aqui va el formulario  */}

<form onSubmit={submit} className={classes.form} noValidate>
<TextField required fullWidth autoFocus id='email' label='Email' name='email' margin='normal' autoComplete='email' variant='outlined'></TextField>
<TextField required fullWidth autoFocus id='password' type='password' label='Password' name='password' margin='normal' autoComplete='current-password' variant='outlined'></TextField>
<FormControlLabel control={
    <Checkbox value='remenber' color='secondary'/>
}
label='Recordad datos'/>

<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Acceder</Button>

<Grid container>
    <Grid item xs={12} sm={6}>
        <Link href='#' variant='body2'>
{'he olvidado la contraseña'}
        </Link>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Link href='#' variant='body2'>
    {'No tengo cuenta'}
</Link>
</Grid>
</Grid>
</form>

</div>
<Box my={8}>
<CopyRight/>
</Box>

</Container>
    );
}

export default LoginPage;
