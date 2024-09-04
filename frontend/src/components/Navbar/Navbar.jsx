import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import LinkedIn and GitHub icons
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-icons">
        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="app__navbar-icon" />
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="app__navbar-icon" />
        </a>
      </div>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              </ul>
           
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
















// import React, { useState } from 'react';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

// import { images } from '../../constants';
// import './Navbar.scss';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.logo} alt="logo" />
//       </div>
//       <ul className="app__navbar-links">
//         {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
//           <li className="app__flex p-text" key={`link-${item}`}>
//             <div />
//             <a href={`#${item}`}>{item}</a>
//           </li>
//         ))}
//       </ul>

//       <div className="app__navbar-menu">
//         <HiMenuAlt4 onClick={() => setToggle(true)} />

//         {toggle && (
//           <motion.div
//             whileInView={{ x: [300, 0] }}
//             transition={{ duration: 0.85, ease: 'easeOut' }}
//           >
//             <HiX onClick={() => setToggle(false)} />
//             <ul>
//               {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
//                 <li key={item}>
//                   <a href={`#${item}`} onClick={() => setToggle(false)}>
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;