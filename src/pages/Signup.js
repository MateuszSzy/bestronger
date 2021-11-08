import React, {useState} from 'react';
import "./Signup.scss";
import {db} from "../firebase";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader,setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('The request has been sent');
            setLoader(false);
        })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form className="form__container" onSubmit={handleSubmit}>
            <h1 className="form__container__title">Contact us</h1>

            <label className="form__container__name">Name</label>
            <input placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)}/>

            <label className="form__container__email">Email</label>
            <input placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label className="form__container__message">Message</label>
            <textarea placeholder="Send a request to join the club " value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

            <button className="form__container__submit" type="submit"
                    style={{background : loader ? "#ccc" : "#189eff"}}>Submit</button>

        </form>
    );
};

export default Signup;