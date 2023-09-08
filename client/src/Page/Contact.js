import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const [formState, setFormState] =
    useState({
        name: '',
        email: '',
        message: '',
    });
    const [btnText, setBtnText] = useState ('Submit');
    const form= useRef();
    const handleChange = (e) => {
        e.preventDefault();
        setFormState({  ...formState, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
        emailjs.sendForm(
            'service_mnv4xud',
            'template_tbarpys',
            form.current,
            'jXiV5LSd3prcbSCXZ')
        .then(
            (result) => {
            console.log(result.text);
            setBtnText ('Message Sent!');
            setTimeout(() => {
            window.location.reload();
        }, 3000);
    },
            (error) => {
            console.log(error.text);
            setBtnText ('Error!');
        });
    };
    return (
        <div className='contact'>
          <div className='container'>
          <center>
          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name
                </label>
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter name"
                defaultValue={formState.name}
                onChange={handleChange}
              />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    defaultValue={formState.email}
                    onChange={handleChange}
                    />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                    message
                    </label>
                    <textarea
                    name="message"
                    className="form-control"
                    rows="3"
                    placeholder="Enter message"
                    defaultValue={formState.message}
                    onChange={handleChange}
                    ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {btnText}
                    </button>
                    </form>
        </center>
        </div>
        </div>
    );
}
export default Contact