import React from 'react'
import { useParams } from 'react-router-dom'
import { Characters } from '../models/Characters';

const CharacterScreen = ({ history }) => {

    const { id } = useParams();
    const { name, description, type, } = Characters.find(char => char.id === id);
    const path = `/assets/${type}-${id}.png`;

    return (
        <div className="container row mt-3">
            <div className="col-8">
                <img className="img-thumbnail"
                    src={path}
                    alt={id}
                    style={{ width: "50%", height: "400px" }}
                />
            </div>
            <div className="col-4">
                <h2>Nombre: {name}</h2>
                <p>Descripción: {description}</p>
                <button type="button" className="btn btn-outline-success"
                    onClick={() => history.goBack()}
                >
                    Volver
                </button>
            </div>
        </div>
    )
}

export default CharacterScreen