import React, { useState, useEffect } from 'react'
import GrayImg from '../../shared/gray_img'
import DescriptionWithLink from '../../shared/descriptionWithLink'

import { Link } from 'react-router-dom'

const Planet = (props) => {

    return (
        <div>
            <Link to={`/planet/${props.id}`}><h4>{props.name}</h4></Link>
            <DescriptionWithLink description={props.description} link={props.link} />
            <GrayImg img_url={props.img_url} gray={props.gray} />
        </div>
    )
}

export default Planet


