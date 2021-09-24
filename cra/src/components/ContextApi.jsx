import React from "react";
import Children from './ContextChildren';

// Provider, Consumer 생성
const { Provider, Consumer } = React.createContext(); 
export { Consumer } // 다른 컴포넌트에서 접근할 수 있게  export


class ContextApi extends React.Component{
    // Context API 데이터 전송 예제
    render(){
        return(
            <Provider value="Using Context Api">
                {/* Provider로 둘러 싼다 */}
                <Children />
            </Provider>
        )
    }
}

export default ContextApi;