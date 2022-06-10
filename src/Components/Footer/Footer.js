import React from 'react';
import facebook from '../../Assets/images/png/001-facebook.png'
import ig from '../../Assets/images/png/002-instagram.png'
import tw from '../../Assets/images/png/003-twitter.png'
import ldin from '../../Assets/images/png/006-linkedin.png'
import beH from '../../Assets/images/png/007-behance.png'

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">

  <div>
    <div class="grid grid-flow-col gap-4">
      <a href='https://www.linkedin.com/in/mdimran5722/' target="_blank" ><img src={ldin} alt="facebook" /></a> 
      <a href='https://web.facebook.com/mdimran5722/ ' target="_blank" ><img src={facebook} alt="facebook" /></a> 
      <a href='https://www.instagram.com/mdimran5722/' target="_blank" ><img src={ig} alt="facebook" /></a> 
      <a href='https://twitter.com/MdImran5722 ' target="_blank" ><img src={tw} alt="facebook" /></a> 
      <a href='https://www.behance.net/mdimran5722' target="_blank" ><img src={beH} alt="facebook" /></a> 
      
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by imran Ltd</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;