import React from 'react';
import style from '../catalogs.module.css';
import Products from '../../products/Products';
import Accordion from '../../../components/accordion/accordion';


class Man extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
            accordionData : [
                {
                title: 'Деловые костюмы:',
                content: [
                    "Классические","неформальные"
                ]
                },
                {title: 'Верхняя одежда:',
                 content: ["куртки","плащи","шубы","дубленки"]
                },
                {title: 'Спортивные товары:',
                 content:["толстовки","костюмы"]
                },
                {title: 'Брюки:',
                 content:["летние","утепленные"]
                },{title: 'Брюки:',
                 content:["летние","утепленные"]
                },
                {title: 'Джинсы и одежда из денима:',
                 content:["летние","утепленные"]
                },
                {title: 'Одежда для дома:',
                 content:["летние","утепленные"]
                },
                {title: 'Брюки:',
                 content:["летние","утепленные"]
                },
                {title: 'Брюки:',
                 content:["летние","утепленные"]
                },
// Брюки и шорты
// Джинсы и одежда из денима
// Комбинезоны и спортивные костюмы
// Костюмы и Пиджаки
// Купальники и пляжная одежда
// Нижнее белье
// Одежда для дома
// Пальто и куртки
// Рубашки
// Свитеры и Толстовки
// Спорт
// Футболки и Топы
// Юбки
                
            ]
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        // this.setState({menu: true})         
        // console.log(e.target.style);
    }
    render() {

        return (
            <>
            <div className={style.filter}>
                <div className={style.filter__wrap}>
                    <ul style={{backgroundColor:"#e8e8e8"}}>
                        <p style={{backgroundColor:"#6699ff",padding:"16px 25px",fontSize:'18px',fontWeight:"900",transform: "translateY(-10px)"}}>КАТАЛОГ:</p>
                        <li className={`${style.filter__menu} ${this.state.menu?style._active:''}`} onClick={this.handleClick}>
                            {this.state.accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content}  />
                                ))}
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
export default Man