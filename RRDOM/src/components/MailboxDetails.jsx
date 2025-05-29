import { useParams } from "react-router"

const MailboxDetails = (props) =>{
    const mailboxes = props.mailboxes
    const {mailboxId} = useParams()

    const selectedMailbox = mailboxes.find(obj => obj._id === (Number(mailboxId)))

    return(
        <>
        <h3>Details</h3>
        <p>Boxholder: {selectedMailbox.boxOwner}</p>
        <p>Box Size:{selectedMailbox.boxSize}</p>
        </>
    )
}

export default MailboxDetails