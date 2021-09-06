import React from 'react';
import style from '../catalogs.module.css';
import Products from '../../products/Products';


class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({menu: true})         
        console.log(e.target.style);
    }
    render() {

        return (
            <>
            <div className={style.filter}>
                <div className={style.filter__wrap}>
                    <ul style={{backgroundColor:"#e8e8e8"}}>
                        <p style={{backgroundColor:"#6699ff",padding:"16px 25px",fontSize:'18px',fontWeight:"900",transform: "translateY(-10px)"}}>КАТАЛОГ:</p>
                        <li className={`${style.filter__menu} ${this.state.menu?style._active:''}`} onClick={this.handleClick}>
                            <p>11111  3rq222t322222222222222222222222222222222 reeeeeeeeeeeeeeeeeee aegwwwwwwwwwwwwwwwwwwwwwww</p>
                            <button disabled="disabled">11111</button>
                            <ul className={style.filter__submenu}>
                                <li>
                                <button disabled="disabled">1///1</button>
                                <button disabled="disabled">1///2</button>
                                <button disabled="disabled">1////3</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    
                    <div className={style.contend}>
                            <Products props={3}/>
                    </div>
                    </div>
            </div>

            </>
        )
    }
}
export default Children