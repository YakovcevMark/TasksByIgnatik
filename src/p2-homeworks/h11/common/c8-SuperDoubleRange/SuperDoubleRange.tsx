import React from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: [number, number]
    min?: number
    max?:number
    step?:number
    disable?:boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disable
    }
) => {
    // сделать самому, можно подключать библиотеки
    const onChangeRageHandler = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value)
    }
    return (
        <>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={onChangeRageHandler}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                min={min}
                max={max}
                step={step}
                disabled = {disable}

            />
        </>
    )
}

export default SuperDoubleRange
