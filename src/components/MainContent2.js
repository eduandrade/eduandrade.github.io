import React, { Component } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  fab,
  faCheckSquare,
  faEnvelope
)

class MainContent extends Component {

  constructor() {
    super();
    this.state = { 
      data: [
        {
          name: "Messenger Beer BOT",
          description: "Beer BOT provides information on beer for everyone — the craft beer rookies, for experts who search for inspiration, and for those who want to discover new tastes. To begin your interaction with Beer Bot, just click on Get Started.",
          html_url: "https://m.me/messengerbeerbot/",
          card_type: "chatbot"
        }
      ] 
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/eduandrade/repos`)
      .then(res => res.json())
      .then(json => {
        let arr = this.state.data;
        arr.push(...json);
        this.setState({ data: arr })
      });
  }

  getCardType(type) {
    return type || "repository";
  }

  render() {

    return (
      <main className="text-dark">

        <div className="d-flex p-1 justify-content-center bg-light">
          <div>
            <div className="display-3 p-1 text-center">Hello, world!</div>
            <p>I'm Eduardo Andrade, a software developer for more than 15 years and this is my personal website, created using <span className="badge badge-info">React</span>, <span className="badge badge-info">Bootstrap 4</span> and <span className="badge badge-info">GitHub API</span>.</p>
            <p>Check some of my projects below :)</p>
            <p>Feel free to add me on <a href="https://www.linkedin.com/in/eduandrade/" target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
            <p>Enjoy!</p>

            <div className="text-center">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="https://github.com/eduandrade" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a></li>
                <li className="list-inline-item"><a href="https://www.linkedin.com/in/eduandrade/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid p-3 bg-light">

          <div className="row mt-5 justify-content-center">

            {this.state.data.map(el => (

              <div className="card card-custom mx-2 mb-3" style={{ width: "18rem" }} key={el.name}>
                <div className="card-header"><strong>{el.name}</strong><br/><span className="badge badge-secondary m-1">{this.getCardType(el.card_type)}</span></div>
                <div className="card-body">
                  <p className="card-text">{el.description}</p>
                </div>
                <div className="card-footer">
                  <a className="btn btn-primary btn-sm" href={el.html_url} target="_blank" rel="noopener noreferrer">View {this.getCardType(el.card_type)} &raquo;</a>    
                </div>
              </div>

            ))}
          </div>

        </div>

      </main>
    );
  }
}

export default MainContent