import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    validationName?: (e: KeyboardEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : undefined // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   // onKeyPress={validationName}
            />
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
