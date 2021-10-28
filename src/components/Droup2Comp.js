import React from 'react'

function Droup2Comp(props) {
    return (
        <div>
            <select>Select-Item 
                <option hidden={true}>---select---</option>
                {props.dropdown2val.map((e)=><option key={e}>{e}</option>)}
                </select>
        </div>
    )
}

export default Droup2Comp
