import React, { Fragment, useState } from 'react'

const initialState = {
    name: ''
}

const FormSatellites = (props) => {

    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (e) => {
        setFields({
            ...fields,
            [e.currentTarget.name]: e.currentTarget.value
        })
    } 

    const handleSubmit = (event) => {
        props.addSatellite(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name Satellite: </label>
                    <input id="name" name="name" type="text" value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br/>
                <input type="submit" />
            </form>
        </Fragment>
    )
}

export default FormSatellites