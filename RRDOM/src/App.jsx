import { useState } from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Mailboxes from "./components/Mailboxes";
import NewMailbox from "./components/NewMailbox";
import MailboxDetails from "./components/MailboxDetails";

const App = () => {
  const [mailboxes, setMailbox] = useState([
    {
      _id: 1,
      boxSize: 'Small',
      boxOwner: 'Alex',
    }])

  return (
    <>
    <NavBar />

    <Routes>
      <Route path="/" element={<HomePage mailboxes={mailboxes}/>} />
      <Route path="/mailboxes" element={<Mailboxes mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" element={<NewMailbox mailboxes={mailboxes} setMailbox={setMailbox}/>} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>} />
    </Routes>
    </>
  );
};

export default App;
