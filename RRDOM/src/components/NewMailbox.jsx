import { useState } from "react"
import { useNavigate } from "react-router"

const NewMailbox = ({mailboxes,setMailbox}) =>{
    const [boxholder,setBoxholder] = useState()
    const [boxSize, setBoxSize] = useState()
    const [errorMess, setErrorMess] = useState()

    const navigate = useNavigate();
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const NewMailbox = {}

        if(boxholder !== undefined && boxSize !== undefined){
            const id = mailboxes.length + 1
            NewMailbox["_id"] = id
            NewMailbox["boxOwner"] = boxholder
            NewMailbox["boxSize"] = boxSize
            setMailbox([...mailboxes, NewMailbox])
            navigate("/mailboxes")
        } else{
            setErrorMess("Error. Please fill in your input.")
        }

        
    }
    return(
        <form onSubmit={handleSubmit}>
        <label>
            Enter a Boxholder:
            <input type="text" name="boxOwner" value={boxholder} onChange={(event) => setBoxholder(event.target.value)} placeholder="Boxholder name"/>
        </label>
        <label>
            Select a Box Size:
            <select name="boxSize" value={boxSize} onChange={(event) => setBoxSize(event.target.value)}>
                <option value="">Select an option</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Big">Big</option>
            </select> <br/>
            <button type="submit">Submit</button>
            <p>{errorMess}</p>
        </label>
        </form>
    )
}

export default NewMailbox