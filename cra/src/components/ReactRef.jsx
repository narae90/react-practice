import React, { Component } from 'react';

class ReactRef extends Component {
    constructor(props) {
        super(props);
        //  참조 객체 생성: DOM 요소에 엘리먼트를 저장하기 위한 ref
        this.textInput = React.createRef();
        //  input#id 엘리먼트를 참조
    }
    JavaScriptFocus() {
        //  VJS로 DOM 객체에 접근 
        document.getElementById("id")
            .style.backgroundColor ="lightblue";
        document.getElementById("id").focus();
    }
    RefFocus = (e) => {
        //  ref를 이용한 엘리먼트 접근
        console.log("REF:", this.textInput);
        console.log(this.textInput.current);
        //  DOM 노드를 얻기 위해, current 속성 이용
        this.textInput.current.style.backgroundColor = "lightgreen";
        this.textInput.current.focus();
    }
    render() {
        // console.log("REF:", this.textInput);
        return (
            <>
                <input id="id" type="text" ref={this.textInput}/>
                <input type="button" value="VJS Focus"
                    onClick={this.JavaScriptFocus} />
                <input type="button" value="Ref Focus"
                    onClick={this.RefFocus} />
            </>
        )
    }
}
export default ReactRef;