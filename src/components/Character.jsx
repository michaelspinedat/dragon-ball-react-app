import React from 'react'
import { Link } from 'react-router-dom';

const Character = ({ id, name, description, type }) => {

    const src = `/assets/${type}-${id}.png`;

    return (
        <div className="card m-2 text-center" style={{ width: "18rem" }}>
            <img src={src} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {description}
                </p>
                <Link to="#" className="btn btn-primary">
                    Ver más
                </Link>
            </div>
        </div>

    )
}

export default Character