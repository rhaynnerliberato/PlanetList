import React from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/descriptionWithLink'


async function getSatellites(id) {
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = response.json()
    return data
}

class Planet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            satellites: []
        }
    }

    componentDidMount() {
        getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        })
    }

    render() {
        return (
            <div onClick={() => this.props.clickOnPlanet(this.props.name)}>
                <h4>{this.props.name}</h4>
                <DescriptionWithLink description={this.props.description} link={this.props.link} />
                <GrayImg img_url={this.props.img_url} gray={this.props.gray} />
                <h5>Satellites</h5>
                <ul>
                    {this.state.satellites.map((satellite, index) =>
                        <li  key={index}>
                            {satellite.name}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Planet


