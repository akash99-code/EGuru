import React from 'react';
import { Link } from 'react-router-dom';

const footer=()=>{
    return(
        <>
<div class="footer">
    <div class="row">
      <div class="white-box" >
        <h6 class="sectionSubHead" style={{color:"#676770",textAlign:'left'}}>CONTACT US</h6>
        <p class="para" style={{textAlign:'left'}}>Whatsapp number - +91 00000 00000 <br /> Email - eguru@gmail.com <br /> Please feel free to contact us for any related  <br /> queries. Sairam.</p>
      </div>
      <div class="white-box" style={{textAlign:'left'}}>
        <h6 class="sectionSubHead" style={{color:"#676770",textAlign:'left'}}>USEFUL LINKS</h6>
        <Link to="#" class="footer-link" >Source Code</Link><br />
        <Link to="#" class="footer-link">Discord Server</Link><br />
        <Link to="#" class="footer-link">Documentation</Link>
         </div>
         <div class="white-box" style={{textAlign:'left'}}>
        <h6 class="sectionSubHead" style={{color:"#676770",textAlign:'left'}}>SOCIAL</h6>
        <Link to="#" class="footer-link" >Instragram</Link><br />
        <Link to="#" class="footer-link">Facebook</Link><br />
        <Link to="#" class="footer-link">Youtube</Link>
         </div>
     </div> 
    </div>
    <div class="footer2">Copyright EGuru Inc. Made in SSSIHL, MDH.</div>
    </>
    );

}
export default footer;