import React from 'react';
import Children from './ContextChildren';
//  Provider, Consumer 생성
const { Provider, Consumer } = React.createContext();
export { Consumer } //  다른 컴포넌트에서 접근할 수 있게 export

class ContextApi extends React.Component {
    //  Context API 데이터 전송 예제
    // render() {
    //     return (
    //         <Provider value="Using Context Api">
    //             {/* Provider로 둘러 싼다 */}
    //             <Children />
    //         </Provider>
    //     )
    // }

    //  컨텍스트로 객체 데이터 전송 예제
    constructor(props) {
        super(props);
        this.state = { name: "Context API" };
        //  this 바인드
        this.setStateFunc = this.setStateFunc.bind(this);
    }

    setStateFunc(value) {
        alert(value);
        this.setState({ name: value });
    }

    render() {
        //  프로바이더에 전송할 객체 
        const content = {
            ...this.state,  //  state 전체
            setStateFunc: this.setStateFunc //  함수 전달
        }
        return (
            <Provider value={content}>
                <div>
                    <h1>{ this.state.name }</h1>
                    <Children />
                </div>
            </Provider>
        )
    }
}
export default ContextApi;