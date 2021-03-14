import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import './App.scss';
import {ContentContainer, SuccessPage} from './containers/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <ContentContainer />
                        </Route>
                        <Route path="/successPage">
                            <SuccessPage />
                        </Route>

                    </Switch>
                </BrowserRouter>

            </div>
        </Provider>
    );
}

export default App;
