import React,{ useState } from 'react';
import './styles.css';
import Api from './Api';

import Card from './Card/Card.jsx'

export default (props)=>{
    const [Perfil, setPerfil] = useState()
    const [Lista, setLista] = useState([])   

    
    async function GerarPerfil(){
        try {
            const response = await Api.get(Perfil)
        setLista([...Lista,{
            Id:response.data.id ,
            Name:Perfil,
            Bio:response.data.bio,
            Foto:response.data.avatar_url,
            Url:response.data.html_url,}])
        } catch (error) {
            console.warn(error)
            alert(`o Perfil Não foi encontrado`)
        }
    }

    function Apagar(Nome){
        const ind = Lista.findIndex((el)=>el.Name=== Nome)
        const copiaLista = Array.from(Lista)
        copiaLista.splice(ind,1)
        setLista(copiaLista)

    }


    const mapear = Lista.map((p)=><Card Name={p.Name} key={p.Id} Foto={p.Foto} Bio={p.Bio} Link ={p.Url} onClicar={Apagar}></Card>)

    return(
        <div className='Main'>
            <input className='Inputers' type='text'onChange={e=> setPerfil(e.target.value)}/>
            <button className="btn btn-secondary" onClick={GerarPerfil}>Gerar</button>

            <div className='Cards'>
            {mapear}
            </div>
        </div>

    );
}