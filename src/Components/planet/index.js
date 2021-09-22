import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/descriptionWithLink'
import Form from './form'


async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = response.json()
    return data
}

const Planet = (props) => {

    const [satellites, setSatellites] = useState([])

    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites'])
        })
    }, [])

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
            <h5>Satellites</h5>
            <hr />
            <Form addSatellite={addSatellite} />
            <hr />
            <ul>
                {satellites.map((satellite, index) =>
                    <li key={index}>
                        {satellite.name}
                    </li>
                )}

            </ul>
        </div>
    )
}

export default Planet


