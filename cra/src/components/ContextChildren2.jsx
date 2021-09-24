import React from 'react';
import { Consumer } from './ContextApi';    //  데이터 소비자 임포트
class ContextChildren2 extends React.Component {
    //  컨텍스트 이용하기 예제
    // render() {
    //     return (
    //         <Consumer>
    //             { contextValue => 
    //                 <h3>contextValue: {contextValue}</h3> }
    //         </Consumer>
    //     )
    // }

    //  컨텍스트로 부모 데이터 변경 예제
    render() {
        return (
            <Consumer>
                { value =>
                    <button onClick={ e => value.setStateFunc("Message From Child")}>
                        { value.name } Button
                    </button>
                }
            </Consumer>
        )
    }
}

export default ContextChildren2;