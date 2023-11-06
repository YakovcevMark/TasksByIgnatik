import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {HW8UserType} from "../../HW8";

let initialState: HW8UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 18},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 18},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 18},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    expect(newState[0].name).toBe("Александр")
    expect(newState[1].name).toBe("Виктор")
    expect(newState[2].name).toBe("Дмитрий")
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    expect(newState[0].name).toBe("Кот")
    expect(newState[1].name).toBe("Коля")
    expect(newState[2].name).toBe("Ирина")
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    expect(newState.length).toBe(3)
    expect(newState[0].name).toBe("Кот")
    expect(newState[1].name).toBe("Виктор")
    expect(newState[2].name).toBe("Ирина")

})
