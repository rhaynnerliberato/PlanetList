import React, { useState, useEffect } from 'react'
import Planet from './planet'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const removeLast = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
    }

    const duplicateLastPlanet = () => {
        let last_planet = planets[planets.length - 1]
        setPlanets([...planets, last_planet])
    }

    return (
        <div>
            <h3>Planet List</h3>
            <button OnClick={removeLast}>Remove Last</button>
            <br />
            <button OnClick={duplicateLastPlanet}>Duplicate Last</button>
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    index={index}
                />
            )}
        </div>
    )
}


export default Planets