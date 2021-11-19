import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/Dialogs/Dialogs";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


let App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/Profile' component={Profile}/>
                        <Route path='/Dialogs' component={Dialogs}/>
                        <Route path='/News' component={News}/>
                        <Route path='/Music' component={Music}/>
                        <Route path='/Settings' component={Settings}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

