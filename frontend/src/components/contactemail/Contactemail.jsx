import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import contactemailimg from '../../assets/images/contact_img-1.jpg';
import './Contactemail.css';
import Button from '../utils/Button';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'; 

function Contactemail() {
  const formRef = useRef();
  const user = useSelector((state) => state.user.user); 

  const sendEmail = (e) => {
    e.preventDefault();

    if (!user) {
      toast.error('Please log in to send a message.');
      return;
    }

    emailjs.sendForm(
      'service_uad3q5p',
      'template_vvqvp4e',
      formRef.current,
      'z9ahSLzQO-Xd-ev31'
    )
    .then((result) => {
      toast.success('Message sent successfully!');
      formRef.current.reset();
    }, (error) => {
      console.log('Xəta:', error.text);
      toast.error('An error occurred! Please try again.');
    });
  };

  return (
    <section id='contactemail'>
      <div className="mycontainer">
        <div className="contactemailbox">
          <div className="emailbox">
            <div className="emailtext">
              <h1 className='sendmessage'>Send us a Message</h1>
              <p>If you have any questions or need more information, please use the form below to send us a message.</p>

              <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Name' required />
                <input type="email" name="email" placeholder='Your Email' required />
                <textarea name="message" placeholder='Your Message' required></textarea>
                <Button type="submit" className='submitbtn'>SUBMIT</Button>
              </form>
            </div>
          </div>

          <div className="emailimagebox">
            <img src={contactemailimg} alt="Contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactemail;
