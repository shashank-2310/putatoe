import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"

const Footer = () => {

  const linkedin = "https://www.linkedin.com/"
  const facebook = "https://www.facebook.com/"
  const instagram = "https://www.instagram.com/"
  const twitter = "https://www.twitter.com/"
  const dowloadUrl =
    "https://play.google.com/store/apps/details?id=com.putatoeapp.application&gl=US";

  return (
    <footer className="footer footer-border py-2 mt-5 mb-0">
      <div className="container">
        <span className="text-center">
          <p>
            Copyright ©️ 2022 - Shashank <br />
            Sample front-end for Putatoe
          </p> 
        </span>
        <hr className="mx-auto"/>
        <div className="col justify-content-center align-items-center d-flex">
          <Link className="mx-3" target="_blank" onClick={() => window.open(linkedin)}><i className="fa-brands fa-linkedin icon"></i></Link>
          <Link className="mx-3" target="_blank" onClick={() => window.open(facebook)}><i className="fa-brands fa-facebook icon"></i></Link>
          <Link className="mx-3" target="_blank" onClick={() => window.open(instagram)}><i className="fa-brands fa-instagram icon"></i></Link>
          <Link className="mx-3" target="_blank" onClick={() => window.open(twitter)} ><i className="fa-brands fa-twitter icon"></i></Link>
          <Link className="mx-3" target="_blank" onClick={() => window.open(dowloadUrl)}><i className="fa-brands fa-google-play mx-2 icon"></i></Link>        
        </div>
      </div>
    </footer>
  )
}

export default Footer