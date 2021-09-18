import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import ShoppingСenters from './pages/shoppingСenters/ShoppingСenters';
import ShopCard from './pages/shopCard/ShopCard'
import furniture from './pages/furniture/Furniture';
import shop from './pages/shop/Shop';
import product from './pages/product/Product';
 import AsiaMall from './pages/asiamol/AsiaMall'
import Products from './pages/products/Products';
import Сatalogs from './pages/catalogs/Сatalogs'
import Man from './pages/catalogs/man/Man'
import Women from './pages/catalogs/women/Women'
import Children from './pages/catalogs/children/Children'

// import Furniture from './pages/catalogs/furniture/Furniture'
// import Product from './pages/catalogs/product/Product'
// import Shoes from './pages/catalogs/shoes/Shoes'

//import ShopCard from './pages/shopCard/ShopCard'

class App extends React.Component{
    componentDidCatch(){
        console.log(this.props.match.params.id);
    }
    
    render(){
        
        return (
            <div className="container">
                <Header/>
                <div className="wrapper">
                <Switch>

                            <Route  exact path="/"><Products/></Route>
                            <Route exact path="/product/:id" render={(props) => (<ShopCard {...props} close={true}/>)}/>
                </Switch>
                <Route exact path="/catalog" component={Сatalogs}/>
                <Route exact path="/shoppingСenter" component={ShoppingСenters}/>
                <Route exact path="/furniture" component={furniture}/>
                <Route exact path="/shop" component={shop}/>
                <Route exact path="/supermarket" component={product}/>


                <Route  path="/shoppingСenter/asia-moll" component={AsiaMall}/>  
            
                <Route  path="/catalog/man" component={Man}/>
                <Route  path="/catalog/women" component={Women}/>
                <Route  path="/catalog/children" component={Children}/>
                {/* <Route  exact path="/catalog/furniture" component={Furniture}/>
                <Route  exact path="/catalog/product" component={Product}/>
                <Route  exact path="/catalog/shoes" component={Shoes}/> */}
                </div>
            </div>
        );
    }
}



export default App;
