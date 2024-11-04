import { useState } from "react"
import Button from "../Button/Button"
import DropdownList from "../DropdownList/DropdownList"
import TextField from "../TextField/TextField"
import "./Form.css"

const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')


    const save = (evento) => {
        evento.preventDefault()
        props.registeredEmployee({
            name,
            role, 
            image,
            team
        })

        setName('')
        setRole('')
        setImage('')
        setTeam('')
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Fill in the information to create the employee card</h2>
                <TextField required={true} label="Name" placeholder="Enter your name" value={name} updated={value => setName(value)}/>
                <TextField required={true} label="Role" placeholder="Enter your role" value={role} updated={value => setRole(value)}/>
                <TextField label="Image" placeholder="Enter your image" value={image} updated={value => setImage(value)}/>
                <DropdownList required={true} label="Time" items={props.teams} value={team} updated={value => setTeam(value)}/>
                <Button>
                     Create card
                </Button>
            </form>
        </section>
    )
}

export default Form