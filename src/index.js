import {App} from './App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

export function handleClick(setIsShown){
    return(event => { setIsShown(current => !current); })
}

root.render(
    <App/>
);