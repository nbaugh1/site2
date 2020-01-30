import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Nick Baughman - Developer" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Hello</h2>
                </header>
                <p>
                  You've made your way to my website. Welcome, I'm Nick. I am a software developer currently located in NYC.
                  I like to use React.js to modern web applications. I'm handy with using Ruby on Rails when things get a little more complicated.
                  
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="skills" className="main special">
            <header className="major">
              <h2>Skills</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Software Development</h3>
                <p>
                  Experienced in building fullstack MVC web applications. Handy with building backend APIs with Ruby on Rails
                  , and frontend interfaces with JavaScript using React.js (with Redux too). 
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Master Multi-tasker</h3>
                <p>
                  Working with a diverse team in a fast paced, high pressure environment is where I thrive.
                  Assessing and understanding varied situations and tasks 
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Efficiency Expert</h3>
                <p>
                  Clean code. Attention to detail. Clear communication.  
                </p>
              </li>
            </ul>
            <footer className="major">
              
            </footer>
          </section>

          <section id="projects" className="main special">
            <header className="major">
              <h2>Projects</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            
            <p className="content">
              
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          
          <section id="blog" className="main special">
            <header className="major">
              <h2>Blog</h2>
            </header>

            <p className="content">
            <ul>
            <li>
              <Link to="/blog" className="button">
              Read More
              </Link>
             </li>     
            </ul>
            </p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <p>
                email: nbaugh1@gmail.com
                <br />
                GitHun: nbaugh1
                <br />
                Twitter: 
                <br />
              </p>
            </header>
            <footer className="major">
              
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
