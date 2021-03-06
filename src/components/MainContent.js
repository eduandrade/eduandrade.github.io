import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    fab,
    faCheckSquare,
    faEnvelope
  )

class MainContent extends Component {
    render() {
      return (
        <main className="text-dark">
  
          <div className="d-flex p-1 bg-warning justify-content-center">
            <div>
              <div className="display-3 text-center">Hello, world!</div>
              <p>I'm Eduardo Andrade, a software developer for more than 15 years and this is my personal website, created using <span className="badge badge-info">React</span> and <span className="badge badge-info">Bootstrap 4</span>.</p>
              <p>Enjoy!</p>
  
              <div className="text-center">
                <ul className="list-inline">
                  <li className="list-inline-item"><a href="https://github.com/eduandrade"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/eduandrade/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="container-fluid p-3">
            <div className="container">
  
              <div className="card-deck">
                <div className="card border-dark shadow-lg" style={{ maxWidth: "18rem" }}>
                  <div className="card-header"><strong>Messenger Beer BOT</strong></div>
                  <div className="card-body">
                    <p className="card-text">Beer BOT provides information on beer for everyone — the craft beer rookies, for experts who search for inspiration, and for those who want to discover new tastes. To begin your interaction with Beer Bot, just click on Get Started.</p>
                    <a className="btn btn-primary btn-sm" href="https://m.me/messengerbeerbot/">View chatbot &raquo;</a>
                  </div>
                  <div className="card-footer">
                    <span className="badge badge-secondary m-1">Node.JS</span>
                    <span className="badge badge-secondary m-1">Express</span>
                    <span className="badge badge-secondary m-1">Heroku</span>
                  </div>
                </div>
  
                <div className="card border-dark shadow-lg" style={{ maxWidth: "18rem" }}>
                  <div className="card-header"><strong>Resume React App</strong></div>
                  <div className="card-body">
                    <p className="card-text">Sample resume/personal website showing how to integrate React, Apigee and Heroku (to be implemented).</p>
                    <a className="btn btn-primary btn-sm" href="https://github.com/eduandrade/resume-react-webapp">View details &raquo;</a>
                  </div>
                  <div className="card-footer">
                    <span className="badge badge-secondary m-1">React</span>
                    <span className="badge badge-secondary m-1">Apigee</span>
                  </div>
                </div>
  
                <div className="card border-dark shadow-lg" style={{ maxWidth: "18rem" }}>
                  <div className="card-header"><strong>go-image-service</strong></div>
                  <div className="card-body">
                    <p className="card-text">Rest API written in GO for uploading images and dynamically dimensioning them according to the input parameters.</p>
                    <a className="btn btn-primary btn-sm" href="https://github.com/eduandrade/go-image-service">View details &raquo;</a>
                  </div>
                  <div className="card-footer">
                    <span className="badge badge-secondary m-1">Golang</span>
                  </div>
                </div>
  
                <div className="card border-dark shadow-lg" style={{ maxWidth: "18rem" }}>
                  <div className="card-header"><strong>crypt-mail</strong></div>
                  <div className="card-body">
                    <p className="card-text">Simple java project that sends encrypted e-mails using a given public key/digital certificate.</p>
                    <a className="btn btn-primary btn-sm" href="https://github.com/eduandrade/crypt-mail">View details &raquo;</a>
                  </div>
                  <div className="card-footer">
                    <span className="badge badge-secondary m-1">Java</span>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
  
        </main>
      );
    }
  }

  export default MainContent