import React from 'react'

function Droup1Comp(props) {
    
    return (
        <div>
            <br /><br />
            <select onChange={(e)=>props.selectbox1val(e.target.value)}>Select-Item
            <option hidden={true}>---Select---</option>
            {props. selectbox1.map((e)=><option key={e}>{e}</option>)}
            </select>
        </div>
    )
}

export default Droup1Comp
