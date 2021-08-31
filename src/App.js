import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Asiamol from './pages/asiamol/Asiamol';

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Header/>
                    
                     <Route  path="/Asiamol"  component={Asiamol}/>
                            
            </BrowserRouter>
        );
    }
}



export default App;
