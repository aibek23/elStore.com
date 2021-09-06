import React from 'react';
import stalie from './modalReg.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock ,faEye} from '@fortawesome/free-solid-svg-icons'


class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            radioBtn1: true,
            radioBtn2: false
        }
        
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState({})
    }
    render() {
        return (
            <>
                <form action="" className={stalie.form}>
                   <div className={stalie.form__user} ><span><FontAwesomeIcon icon={faUser} /></span><input type="text" className={stalie.form__user__input}/></div> 
                   <div className={stalie.form__user} >
                       <span><FontAwesomeIcon icon={faLock} /></span>
                       <input type="password" className={stalie.form__user__input}/>
                       <span style={{position:'absolute',right:'10px'}}><FontAwesomeIcon icon={faEye} /></span></div> 
                    <button>Войти</button>
                    <a style={{textDecoration:"none",textAlign:"center",color:"black",fontSize:"18px"}} href="">Забыли пароль?</a>
                </form>

            </>
        )
    }
}
export default UserLogin