import React from 'react'

function Statement({ statement }) {
    {
        return (
            <div>{statement  &&
                <div className="bg-white display-ib rounded p">
                    <strong>{statement}</strong>
                </div>
            }
            </div>
        )
    }

}

export default Statement
