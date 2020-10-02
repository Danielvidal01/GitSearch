import React from 'react';
import './styles.css';

export default (props)=>{
    return(
        <div className='Card' key={props.Id}>
            <div className='Inform'>
                <a href={props.Link} target='_blank' rel="noopener noreferrer" ><img src={props.Foto}width='80px' height='80px' alt='foto de perfil'/></a>
                <h3>{props.Name}</h3>
            <p>{props.Bio}</p>
            </div>
            <button className="btn btn-secondary btn-lg" onClick={()=>{
                props.onClicar(props.Name)
            }}>X</button>
        </div>
    )
}