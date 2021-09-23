import React, { useState, useEffect } from 'react'
import GrayImg from '../shared/gray_img'
import DescriptionWithLink from '../shared/descriptionWithLink'
import Form from './form'
import { useParams } from 'react-router-dom'

async function getPlanet(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = response.json()
    return data
}

const Planet = () => {

    const [satellites, setSatellites] = useState([])
    const [planet, setPlanet] = useState([])
    let { id } = useParams()

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        })
    }, [])

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }

    return (
        <div>
            <h4>{planet.name}</h4>
            <DescriptionWithLink description={planet.description} link={planet.link} />
            <GrayImg img_url={planet.img_url} gray={planet.gray} />
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


