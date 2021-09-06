import React from 'react';
import stalie from './modalReg.module.css';
import Up from '../../img/svg/Up.svg';
import download from '../../img/svg/download.svg'

class UserReg extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            radioBtn1: true,
            radioBtn2: false,
            fileload:'Загрузите фото магазина или бутика'

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({})
    }
    handleChange(e){
        this.setState({fileload:e.target.value})
    }
    render() {
        return (
            <>
                <form action="" className={stalie.form}>
                    <input type="text" placeholder="Укажите название магазина или бутика" />
                    <input type="text" placeholder="Укажите адрес" />
                    <input type="text" placeholder="Укажите номер мобильного телефона" />
                    <div className={stalie.download__img}>
                        <input type="file" onChange={this.handleChange}/>
                            <div class={stalie.fileLoad} stalie={{position:"absolute",zIndex:'-1'}}>
                                <input type="text" value={this.state.fileload} placeholder="Загрузите фото магазина или бутика"/>
                                <img src={download}alt=""/>
                            </div>
                    </div>
                    {/* <div class="radioblock">
                        <div class="radio">Красивый(ая)</div>
                        <div class="radio">Умный(ая)</div>
                        <div class="radio">Коммуникабульный(ая)</div>
                        <div class="radio">Скромный(ая)</div>
                        <div class="clear"></div>
                        
                        <input type="hidden" id="radion" />
                    </div> */}
                    <div className={stalie.download__img}>
                    <input type="text" placeholder="Привяжите свой магазин или бутик" style={{position:"relative",opacity:"1"}}/>
                    <span style={{position:"absolute",top:"30%",right:"5px",zIndex:"10"}}><img src={Up} alt="" /></span>
                    </div>
                    <label class={stalie.checkbox}>
                        <input type="checkbox" />
                        <span class={stalie.checkbox__icon}></span>
                        <p style={{marginLeft:"5px"}}> Регистрируясь, вы принимаете Пользовательское<br/>соглашение и Конфиденциальность </p>
                    </label>
                    <button>Регистрация</button>
                </form>

            </>
        )
    }
}
export default UserReg