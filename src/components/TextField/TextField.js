import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {

    const [value, setValue] = useState('')

    const typed = (evento) => {
        props.updated(evento.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label> 
            <input value={props.value} onChange={typed} required={props.required} placeholder={props.placeholder} /> 
        </div>
    )
}

export default TextField