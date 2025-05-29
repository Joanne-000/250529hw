const NewMailbox = () =>{
    return(
        <form>
        <label>
            Enter a Boxholder:
            <input type="text" placeholder="Boxholder name"/>
        </label>
        <label>
            Select a Box Size:
            <select>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Big">Big</option>
            </select>
        </label>
        </form>
    )
}

export default NewMailbox