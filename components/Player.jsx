import { useState } from "react";
const Player = ({name,symbol}) =>{
    const [isEditing,setisEditing] = useState(false);
    const [userName,setuserName] = useState(name)
    const editHandler = () =>{
        setisEditing((editing) => !editing);
        
    }
    const handleChange = (event) =>{
        setuserName(event.target.value)
    }
    let playerName = <span className='player-name'>{userName}</span>
    if (isEditing) playerName=<input type='text' required value={userName} onChange={handleChange}/>
    return (
        <li>
            <span className='player'>
            {playerName}
            <span className='player-symbol'>{symbol}</span>
            <button onClick={editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
            </span>
          </li>
    )
}
export default Player;