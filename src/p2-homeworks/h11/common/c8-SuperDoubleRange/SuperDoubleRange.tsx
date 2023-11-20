import React from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
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

    return (
        <>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                // getAriaValueText={valuetext}
                disableSwap
                min={min}
                max={max}
                step={step}
                dosabled = {disable}

            />
        </>
    )
}

export default SuperDoubleRange
