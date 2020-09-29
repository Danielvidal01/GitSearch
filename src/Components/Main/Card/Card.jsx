import React from 'react';
import './styles.css';

export default (props)=>{
    return(
        <div className='Card' key={props.Id}>
            <img src={props.Foto}width='80px' height='80px' alt='foto de perfil'/>
            <h3>{props.Name}</h3>
            <p>{props.Bio}</p>
        </div>
    )
}