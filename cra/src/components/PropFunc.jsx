function PropFunc(props) {
    console.log("PropFunc:", props);
    
    let { prop_str, prop_num,
        prop_false, prop_true,
        prop_obj, prop_func } = props;
    
    const sendMessage = () => {
        if (prop_func) {
            prop_func("Message From PropFunc Component");
        }
    }
    return (
        <div>
            <h3>Props From Parent</h3>
            <ul>
                <li>string: { prop_str }</li>
                <li>number: { prop_num }</li>
                <li>bool false: { !prop_false ? "false": "not false" }</li>
                <li>bool true: { prop_true ? "true": "not true" }</li>
                <li>obj: { JSON.stringify(prop_obj) }</li>
                { prop_func && 
                    <li>
                        <button onClick={sendMessage}>부모에게 메시지 전송</button>
                    </li>
                }
            </ul>
        </div>
    )
}

export default PropFunc;