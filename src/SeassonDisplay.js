import React from 'react'
import './SeassonDisplay.css'


const seasonConfig = {
    Winter: {
        texto: 'Mas é muito frio',
        icon: 'snowflake'
    },
    Summer: {
        texto: 'Aki está muito calor',
        icon: 'sun'
    }
}

const getSeasson = ( lat, mes) =>{
    if (mes > 2 && mes < 9){
        return lat > 0? 'Summer' : 'Winter'
    }else{
        return lat > 0? 'Winter' : 'Summer'
    }
}

const SeassonDisplay = props => {
    const season = getSeasson(props.lat, new Date().getMonth())
    const {icon, texto} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${icon} icon massive`} />
            <h1>{texto}</h1>
            <i className={`icon-right ${icon} icon massive`} />
        </div>
    )
}

export default SeassonDisplay