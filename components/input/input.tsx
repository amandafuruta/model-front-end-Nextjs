import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

interface Props {
    name: string
    label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function InputComponent({ name, label, ...rest }: InputProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    const { fieldName, registerField, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            getValue: ref => ref.value,
            setValue: (ref, newValue) => {
                ref.value = newValue
            },
            clearValue: ref => {
                ref.value = ''
            },
        })
    }, [fieldName, registerField])

    return (
        <div>
            {label && <label htmlFor={fieldName}>{label}</label>}
            <input id={fieldName} ref={inputRef} {...rest} />
            {error && <span>{error}</span>}
        </div>
    )
}
