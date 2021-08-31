import React from 'react';
import stalie from './modalReg.module.css';

class ModalReg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={stalie.modal + ' ' + [stalie[`${this.props.isModal ? '' : 'close'}`]]} onClick={() => this.props.close(true)} >
                    <div className={stalie.modal__wrrap}>
                        <div className={stalie.modal__content} onClick={(e) => e.stopPropagation()}>
                            <div className="modal__title">
                                <button>вход</button>
                                <button>регистрация</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default ModalReg