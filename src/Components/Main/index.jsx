import React,{ useState } from 'react';
import './styles.css';
import Api from './Api';

import Card from './Card/Card.jsx'

export default (props)=>{
    const [Perfil, setPerfil] = useState()
    const [Lista, setLista] = useState([])   

    
    async function GerarPerfil(){
        const response = await Api.get(Perfil)
        setLista([...Lista,{
            Id:response.data.id ,
            Name:Perfil,
            Bio:response.data.bio,
            Foto:response.data.avatar_url}])
    }

    const mapear = Lista.map((p)=><Card Name={p.Name} key={p.Id} Foto={p.Foto} Bio={p.Bio}></Card>)

    return(
        <div className='Main'>
            <p>Gerador Perfis Git</p>
            <input type='text'onChange={e=> setPerfil(e.target.value)}/>
            <button onClick={GerarPerfil}>Gerar</button>

            <div className='Cards'>
            {mapear}
            </div>
        </div>

    );
}