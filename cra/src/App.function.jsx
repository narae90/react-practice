import React from 'react';
import UseStateComp from './components/UseStateComp'
import UseEffectComp from './components/UseEffectComp';
import { useState } from 'react';

function App() {
    //  useEffect 테스트를 위한 상태변수
    const [visible, setVisible] = useState(false);

    return (
        <>
            <h2>Function Component</h2>
            <UseStateComp
                contents="[함수형 컴포넌트]" />
            <button onClick={() => setVisible(!visible)}>
                {visible ? "숨기기": "보이기"}
            </button>
            { visible && <UseEffectComp /> }
        </>
    )
}

export default App;