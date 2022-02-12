import React from 'react'
import Character from '../components/Character'

const ManScreen = ({ men }) => {

    return (
        <div className="container m-3">
            <h1>Men screen</h1>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    men.map(man => (<Character key={man.id} {...man} />))
                }
            </div>
        </div>
    )
}

export default ManScreen