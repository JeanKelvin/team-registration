import './DropdownList.css'

const DropdownList = (props) => {

    return(
        <div className='dropdown'>
            <label>{props.label}</label>
            <select onChange={evento => props.updated(evento.target.value)} required={props.required} value={props.value}>
                <option></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList