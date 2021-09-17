class Welcome extends React.Component {
    //  생성자
    constructor(props) {
        super(props);   //  부모 생성자 호출

        //  state : 객체 내부에서 정의되고 사용되는 데이터
        //      내부에서 변경 가능

        this.state = {
            color: "yellow"
        }
        console.log("Welcome props:", props);
        //  state 조회: this.state로 접근
        //  state 변경: 반드시 this.setState() 함수로 변경
        console.log("Welcome state:", this.state);
        console.log("Welcome 생성자 호출!");
    }

    //  LifeCycle
    //  Mount 단계: rendering 직전
    /*
    componentWillMount() {
        console.log("LifeCycle: componentWillMount Calls");
    }
    //  Mount 단계: rendering 직후
    componentDidMount() {
        console.log("LifeCycle: componentDidMount Calls");
    }
    */
    // New Mounting 라이프사이클 : 
    //  constructor -> getDerivedStateFromProps -> render -> componentDidMount
    static getDerivedStateFromProps(nextProps, prevState) {
        //  props로 받아온 값을 state에 넣고 싶을 때 호출
        console.log("New LifeCycle: getDerivedStateFromProps calls");
        console.log(nextProps, prevState);

        if (nextProps.color !== prevState.color &&
            nextProps.color !== undefined) {
                //  새로운 props을 state에 반영
            console.log("color state에 반영");
            return { color: nextProps.color };  //  변경된 state 리턴
        }

        //  변경 사항이 없을 때
        return null;
    }

    componentDidMount() {
        console.log("LifeCycle: componentDidMount Calls");
    }

    componentWillUnmount() {
        console.log("LifeCycle: componentWillUnmoutn Calls");
    }
    //  Mount 단계: componentWillMount -> render -> componentDidMount
    //  Unmount 단계: componentWillUnmount

    //  Old Updating 라이프 사이클:
    //  componentWillRecieveProps -> componentWillUpdate -> componentDidUpdate
    /*
    componentWillReceiveProps() {
        console.log("LifeCycle: componentWillReceiveProps call");
    }
    componentWillUpdate() {
        console.log("LifeCycle: componentWillUpdate call");
    }
    componentDidUpdate() {
        console.log("LifeCycle: componentDidUpdate call");
    }
    */
    //  New Updating LifeCycle: 
    //      getDerivedStateFromProps -> shouldComponentUpdate -> render -> 
    //      getSnapshotBeforeUpdate -> componentDidUpdate
    shouldComponetUpdate(nextProps, nextState) {
        //  컴포넌트를 다시 렌더링 해야 할지 결정하는 단계
        console.log("New LifeCycle: shouldComponentUpdate calls");
        console.log(nextProps);
        console.log(nextState);
        return false;   //  리턴 값이 true 면 다시 렌더링
    }

    getSnapshopBeforeUpdate(prevProps, prevState) {
        //  컴포넌트 변화가 일어나기 직전의 DOM 상태를 가져와서 특정 값을 반환
        //  -> 이값은 componentDidUpdate에서 받아올 수 있다
        console.log("New LifeCycle: getSnapshotBeforeUpdate calls");
        console.log(prevProps);
        console.log(prevState);
        return null;    //  반환된 값은 componentDidUpdate에서 받아올 수 있다.
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //  snapshot : getSnapshotBeforeUpdate에서 리턴한 값
        console.log("New LifeCycle: componentDidUpdate calls");
        if (snapshot) {
            console.log("업데이트 되기 전의 snapshot:", snapshot);
        }
    }

    render() {
        //  JSX를 리턴
        console.log("render props:", this.props)
        console.log("LifeCycle: render");
        //  컴포넌트에 style 부여
        //  style 속성에 객체 전달
        const style = {
            color: this.state.color,
            backgroundColor: "black"
        }
        return (
            <div>
                <h3 style={style}>{ this.props.message }</h3>
                { this.props.children }
            </div>
        )
    }
}