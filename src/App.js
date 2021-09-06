import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShoppingСenters from './pages/shoppingСenters/ShoppingСenters';
import AsiaMall from './pages/asiamol/AsiaMall'
import Products from './pages/products/Products';
import Сatalogs from './pages/catalogs/Сatalogs'
import Man from './pages/catalogs/man/Man'
import Women from './pages/catalogs/women/Women'
import Children from './pages/catalogs/children/Children'
import Furniture from './pages/catalogs/furniture/Furniture'
import Product from './pages/catalogs/products/Products'
import Shoes from './pages/catalogs/shoes/Shoes'

class App extends React.Component{
    
    render(){
        
        return (
            <BrowserRouter>
            <div className="container">
                <Header/>
                
                {/* <Route exact  path="/catalog" components={Сatalogs}/> */}
                <div className="wrapper">
                <Route exact path="/catalog/children" component={Children}/>
                <Route exact path="/shoppingСenter" component={ShoppingСenters}/>
                <Route  path="/shoppingСenter/asia-moll" component={AsiaMall}/>
                <Route exact path="/" component={Products}/>
                <Route exact path="/catalog" component={Сatalogs}/>
                
                
                <Route  exact path="/catalog/man" components={Man}/>
                <Route  exact path="/catalog/women" components={Women}/>
                <Route  exact path="/catalog/furniture" components={Furniture}/>
                <Route  exact path="/catalog/product" components={Product}/>
                <Route  exact path="/catalog/shoes" components={Shoes}/>
                 </div>
            </div>
            </BrowserRouter>
        );
    }
}



export default App;
