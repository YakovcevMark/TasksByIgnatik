import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styled from "styled-components";

type PeopleType = {
    _id: number,
    name: string,
    age: number
}

export type HW8UserType ={
    _id: number,
    name: string,
    age: number
}

const initialPeople:HW8UserType[] = [
    {_id: 0, name: 'Кот', age: 18},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 18},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 18},
]

function HW8() {
    const [people, setPeople] = useState<HW8UserType[]>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: HW8UserType) => (
        <Human key={p._id}>
            <div>{p.name} </div>
            <div>{p.age}</div>
        </Human>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const checkAge = (age:number) => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: age}))

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <SuperButton onClick={sortUp}>sort up</SuperButton>
            <SuperButton onClick={sortDown}>sort down</SuperButton>
            <SuperButton onClick={() => checkAge(18)}>check 18</SuperButton>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}
const Human = styled.div`
 
    width: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  
`


export default HW8
