import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_mge3bpb';
    const templateID = 'template_33yvern';
    const userID = 'hGz4IUHnG2fqQnnKH';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@micael.com" className="p-text">shonaliromeshika@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+1 (123) 456-7890" className="p-text">+94768881337</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" onSubmit={handleSubmit}>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} required />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p-text">{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);





















// import React, { useState } from 'react';

// import { images } from '../../constants';
// import { AppWrap, MotionWrap } from '../../wrapper';
// import { client } from '../../client';
// import './Footer.scss';

// const Footer = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { username, email, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     setLoading(true);

//     const contact = {
//       _type: 'contact',
//       name: formData.username,
//       email: formData.email,
//       message: formData.message,
//     };

//     client.create(contact)
//       .then(() => {
//         setLoading(false);
//         setIsFormSubmitted(true);
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <h2 className="head-text">Contact me</h2>

//       <div className="app__footer-cards">
//         <div className="app__footer-card ">
//           <img src={images.email} alt="email" />
//           <a href="mailto:hello@micael.com" className="p-text">hello@micael.com</a>
//         </div>
//         <div className="app__footer-card">
//           <img src={images.mobile} alt="phone" />
//           <a href="tel:+1 (123) 456-7890" className="p-text">+1 (123) 456-7890</a>
//         </div>
//       </div>
//       {!isFormSubmitted ? (
//         <div className="app__footer-form app__flex">
//           <div className="app__flex">
//             <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
//           </div>
//           <div className="app__flex">
//             <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
//           </div>
//           <div>
//             <textarea
//               className="p-text"
//               placeholder="Your Message"
//               value={message}
//               name="message"
//               onChange={handleChangeInput}
//             />
//           </div>
//           <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
//         </div>
//       ) : (
//         <div>
//           <h3 className="head-text">
//             Thank you for getting in touch!
//           </h3>
//         </div>
//       )}
//     </>
//   );
// };

// export default AppWrap(
//   MotionWrap(Footer, 'app__footer'),
//   'contact',
//   'app__whitebg',
// );