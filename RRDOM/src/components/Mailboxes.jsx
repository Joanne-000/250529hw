import { Link } from "react-router"

const Mailboxes = ({mailboxes}) =>{
    return(
        <>
        <h1>Mailbox List</h1>
        {mailboxes.map((mailbox) =>(
            <div><Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link></div>
        ))}
        </>
    )
}

export default Mailboxes