/* eslint no-eval:0 */
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import MathOperations from './components/MathOperations'
import Functions from './components/Functions'
import Numbers from './components/Numbers'

const App = () => {
    const [stack, setStack] = useState('')

    const items = words(stack, /[^-^+^*^/]+/g)
    const value = items.length ? items[items.length - 1] : '0'

    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers
                onClickNumber={number => {
                    setStack(`${stack}${number}`)
                }}
            />
            <Functions
                onContentClear={() => setStack('')}
                onDelete={() => {
                    if (stack.length > 0) {
                        const newStack = stack.substring(0, stack.length - 1)
                        setStack(newStack)
                    }
                }}
            />
            <MathOperations
                onClickOperation={operation => {
                    setStack(`${stack}${operation}`)
                }}
                onClickEqual={() => {
                    setStack(eval(stack))
                }}
            />
        </main>
    )
}

export default App
