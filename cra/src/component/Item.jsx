import React from 'react';

// function Item(props) {  //  매개 변수로 props를 전달
//     console.log("PROPS:", props);
function Item({name, checked}) { //  구조 분해 할당, props에서 name 필드 분해
    /*
    return (
        <h3>My Item: { props.name }</h3>
    )
    */
    //  조건부 렌더링 1. 3항 연산자 이용
    //  checked가 true면 앞에 * 붙이자
    // return (
    //     <h3>
    //         { checked ? <b>*</b>: null }
    //         My Item: { name }</h3>
    // )

    //  조건부 렌더링 2. 논리 연산자 이용
    return (
        <h3>
            { checked && <b>*</b> }
            My Item: { name }
        </h3>
    )
}

//  내보내기
export default Item;