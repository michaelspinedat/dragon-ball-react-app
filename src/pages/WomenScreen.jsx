import React from 'react'
import Character from '../components/Character'

const WomenScreen = ({ women }) => {
    return (
        <div className="container m-3">
            <h1>Women screen</h1>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    women.map(women => (<Character key={women.id} {...women} />))
                }
            </div>
        </div>
    )
}

export default WomenScreen