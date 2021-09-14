import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShoppingСenters from './pages/shoppingСenters/ShoppingСenters';
import ShopCard from './pages/shopCard/ShopCard'
import furniture from './pages/furniture/Furniture';
// import AsiaMall from './pages/asiamol/AsiaMall'
import Products from './pages/products/Products';
import Сatalogs from './pages/catalogs/Сatalogs'
import Man from './pages/catalogs/man/Man'
import Women from './pages/catalogs/women/Women'
import Children from './pages/catalogs/children/Children'
import Furniture from './pages/catalogs/furniture/Furniture'
import Product from './pages/catalogs/product/Product'
import Shoes from './pages/catalogs/shoes/Shoes'

//import ShopCard from './pages/shopCard/ShopCard'

class App extends React.Component{
    
    render(){
        
        return (
            <BrowserRouter>
            <div className="container">
                <Header/>
                
                {/* <Route exact  path="/catalog" components={Сatalogs}/> */}
                <div className="wrapper">
                <Route exact path="/shoppingСenter" component={ShoppingСenters}/>
                <Route exact path="/furniture" component={furniture}/>
                {/* <Route  path="/shoppingСenter/asia-moll" component={AsiaMall}/> */}
                <Route path="products" component={Products}/>
                <Route path="products/:id" component={ShopCard}/> 
                <Route exact path="/catalog" component={Сatalogs}/>
                
                
                <Route  exact path="/catalog/man" component={Man}/>
                <Route  exact path="/catalog/women" component={Women}/>
                <Route  exact path="/catalog/children" component={Children}/>
                <Route  exact path="/catalog/furniture" component={Furniture}/>
                <Route  exact path="/catalog/product" component={Product}/>
                <Route  exact path="/catalog/shoes" component={Shoes}/>
 
                 </div>
            </div>
            {/* img={'https://ae01.alicdn.com/kf/HTB1Hwu6Xs_vK1Rjy0Foq6xIxVXao/ZOGAA.jpg'} */}
            </BrowserRouter>
        );
    }
}



export default App;
