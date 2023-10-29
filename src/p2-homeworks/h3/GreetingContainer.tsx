import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        // console.log(e.charCode);
        setName(e.currentTarget.value)
        error && setError(null)// need to fix
    }
    const addUser = () => {
        const trimName = name.trim();
        if (trimName) {
            alert(`Hello ${trimName}!`)
            addUserCallback(trimName)
            setName('')
        } else {
            setError('Field is required')
        }
        // need to fix
    }

    const totalUsers = users.length // need to fix
    // const validationName = (e: KeyboardEvent<HTMLInputElement>) => {
    //
    // }
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            // validationName={validationName}
        />
    )
}

export default GreetingContainer
