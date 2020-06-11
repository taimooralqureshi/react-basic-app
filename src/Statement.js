import React from 'react'

function Statement({ statement }) {
    {
        return (
            statement  && 
                <div className="bg-white display-ib rounded p">
                    <strong>{statement}</strong>
                </div>
            
        )
    }

}

export default Statement
