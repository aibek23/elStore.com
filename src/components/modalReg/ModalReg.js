import React from 'react';
import stalie from './modalReg.module.css';
import UserLogin from './UserLogin'
import UserReg from './UserReg'
class ModalReg extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            radioBtn1: true,
            radioBtn2: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        if(e.target.id==='btn2'){
        this.setState({
            radioBtn1: false,
            radioBtn2: true
        })
        }else{
            this.setState({
                radioBtn1: true,
                radioBtn2: false
            })
        }
        console.log(e.target.id);
    }
    componentDidUpdate() {
        if(this.props.isModal){
            document.body.style.overflow = "hidden"

        }else{

            document.body.style.overflow = "auto"
        }
      }

    

    render() {
        return (
            <>
                <div className={stalie.modal + ' ' + [stalie[`${this.props.isModal ? '' : 'close'}`]]} onClick={() => this.props.close(true)} >
                    <div className={stalie.modal__wrrap}>
                        <div className={stalie.modal__content} onClick={(e) => e.stopPropagation()}>
                            <div className={stalie.modal__title}>
                                <button className={stalie.modal__title__btn+ ' ' + [stalie[`${this.state.radioBtn1 ? 'active' : ''}`]]} onClick={this.handleClick} id="btn1">вход</button>
                                <button className={stalie.modal__title__btn+ ' ' + [stalie[`${this.state.radioBtn2 ? 'active' : ''}`]]} onClick={this.handleClick} id="btn2">регистрация</button>
                            </div>
                            {this.state.radioBtn1?<UserLogin/>:<UserReg/>}
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default ModalReg