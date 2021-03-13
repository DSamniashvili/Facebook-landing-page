import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import './App.scss';
import {ContentContainer} from './containers/index';



const store = configureStore();


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ContentContainer />
            </div>
        </Provider>
    );
}

export default App;
