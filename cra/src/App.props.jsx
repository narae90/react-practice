import React from 'react';
import PropClass from './component/PropClass';
import PropFunc from './component/PropFunc';

function App() {
    const messageFromChild = (message) => {
        alert(message);
    }

    return (
        <div>
            <h2>Props in Class Component</h2>
            <PropClass prop_str="string value"
                prop_num={ 10 }
                prop_false={ false }
                prop_true
                prop_obj={{
                    name: "홍길동",
                    age: 28
                }} 
                prop_func={ messageFromChild }
                >
                <h4>Children</h4>
                <p>자식 컴포넌트</p>
            </PropClass>
            <h2>Props in Function Component</h2>
            <PropFunc
                prop_str="string value"
                prop_num={ 10 }
                prop_false={ false }
                prop_true
                prop_obj={{
                    name: "홍길동",
                    age: 28
                }} 
                prop_func={ messageFromChild }
                />
        </div>
    )
}

export default App;