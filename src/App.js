import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './containers/Home';
import Login from './containers/accounts/Login';
import AgregarPacientes from './containers/pacientes/AgregarPacientes';
import Derivacion from './containers/pacientes/Derivacion';
import Layout from './hocs/Layout';
import FichaPaciente from './containers/pacientes/FichaPaciente';
import PacienteDashBoard from './containers/pacientes/PacienteDashBoard';
import FichaSesion from './containers/pacientes/FichaSesion';
import ModificarPaciente from './containers/pacientes/ModificarPaciente';
import AreaComercial from './containers/informes/AreaComercial'



const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/pacientes' component={AgregarPacientes} />
                    <Route exact path='/pacientes/:id' component={PacienteDashBoard} />
                    <Route exact path='/pacientes/ficha_paciente/:id' component={FichaPaciente} />
                    <Route exact path='/pacientes/ficha_sesion/:id' component={FichaSesion} />
                    <Route exact path='/pacientes/modificar_paciente/:id' component={ModificarPaciente} />
                    <Route exact path='/derivacion/:id' component={Derivacion} />
                    <Route exact path='/informes/area_comercial' component={AreaComercial} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
);

export default App;
