import {React} from 'react';
import {BrowserRouter as Router , Switch,Route,Redirect}from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import "./App.css";
function App() {

  // TODO pasarlo a sesion Storage

  let loggedIn = true;


  return (
    <div>
<Router>
{/* Switch de Rutas */}
<Switch>
        {/* Ruta a la raíz con redirección a Login si no está logueado */}
        <Route exact path='/'>
            { loggedIn ? 
              <Redirect from='/' to='/dashboard'/>
              :
              <Redirect from='/' to='/login' />
            }
        </Route>
        {/* Ruta a Login */}
        <Route exact path='/login' component={LoginPage}/>
        {/* Ruta al Dashboard con redirección a Login si no está logueado */}
        <Route exact path='/dashboard'>
            { loggedIn ? 
              <DashboardPage />
              :
              <Redirect from='/dashboard' to='/login' />
            }
        </Route>
      </Switch>

</Router>
</div>
  );
}

export default App;
