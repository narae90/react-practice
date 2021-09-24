import { Component } from 'react';

class ReactState extends Component {
    constructor(props){
        super(props);
        // state 선언
        this.state = {
            stateString: this.props.reactString,
            stateNumber: 0
        }
    }
    stateChange = (flag) => {
        // flag: direct, setState, forceUpdate
        if(flag === "direct"){  // 직접 변경하기 버튼 클릭!
            this.state.stateString = "리액트 스테이트 직접 변경";
            this.state.stateNumber += 1;

        }else if (flag === "setState"){     // setState 함수를 이용 state 변경
            this.setState({
                stateString: "setState 스테이트 변경",
                stateNumber: this.state.stateNumber + 1
            })
            // setState 함수 호출, state 변경 -> render 함수 호출

        } else if(flag ==="forceUpdate"){
            this.forceUpdate(); // render 함수를 강제로 호출
        }
    }
    render(){
        return(
            <div>
                <h2>State</h2>
                <ul>
                    <li>String: {this.state.stateString}</li>
                    <li>Number: {this.state.stateNumber}</li>
                </ul>
                <button onClick={ e => this.stateChange("direct", e)}>State 직접 변경</button>
                <button onClick={ e => this.stateChange("setState", e)}>setState 변경</button>
                <button onClick={ e => this.stateChange("forceUpdate", e)}>state 강제 업데이트 </button>
            </div>
        )
    }
}

export default ReactState
