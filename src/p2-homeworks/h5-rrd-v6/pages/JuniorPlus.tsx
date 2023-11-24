import React, {useState} from 'react'
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import axios from "axios";


function HW13() {
    const [val,setVal] = useState<boolean>(false)
    const sendRequest = () => {
        axios.post("https://neko-cafe-back.herokuapp.com/auth/test",{success:val})
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }

    return <div>
        <SuperButton onClick={sendRequest}>SendMessage</SuperButton>
        <SuperCheckbox onChangeChecked={setVal}/>
    </div>;
}

function JuniorPlus() {
    return (
        <div>
          <HW13/>

        </div>
    )
}

export default JuniorPlus
