// React 컴포넌트 만들기 : Without JSX
/* function HelloButton(){
    // 만들어진 컴포넌트 리턴
    return React.createElement("button", // HTMLElement
    {
        // React 컴포넌트 옵션
        onClick: event => {
            alert(event.target.innerText);
        }
    }, // React 컴포넌트 옵션
    "React Button" // Children
    );
}


// 컨테이너 찾기
const container = document.getElementById("root");
// React 컴포넌트 붙이기
ReactDOM.render(React.createElement(HelloButton), container);
*/

// with JSX
function HelloButton(props) {
    console.log("HelloButton props:", props);
    console.log("childeren:", props.children);
    
    const click = event => {
        event.preventDefault();
        alert("Hello Button Clicked! (with JSX)");
    }
    return(
        <button onClick={click}>
            {props.children}
        </button>
    )
}


// 클래스형 컴포넌트
// React.Component를 상속
class HelloButtonClass extends React.Component {
    // 생성자
    constructor(props){
        super(props);
        console.log("HelloButtonClass Props:", props);
        this.click= this.click.bind(this);
    }

    click=event=> {
        event.preventDefault();
        alert("HelloButton Clicked! (클래스형 컴포넌트)");
    }
    // 반드시 render 메소드 오버라이드 -> 랜더링
    render() {
        return(
            <button onClick={this.click}>
                {this.props.children}
            </button>
        )
    }

}


const container = document.getElementById("root");
ReactDOM.render(
    <div>
        <HelloButton>React Function Button</HelloButton>
        <HelloButtonClass>React Class Button</HelloButtonClass>
    </div>,
    container
)