import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import './App.scss';
import {ContentContainer, SuccessPage} from './containers/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import constants from './constants/GENERAL';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path={constants.paths.homepage} exact>
                            <ContentContainer />
                        </Route>
                        <Route path={constants.paths.successPage}>
                            <SuccessPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
