import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }
  postSearch(e) {
    e.preventDefault()
    this.props.changeSearch(this.state.search)
    this.setState({ search: "" })
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="/" onClick={() => this.props.changeSearch()}>NewsApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-light" aria-current="page" to="/All" onClick={() => this.props.changeSearch()}>All</Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-light" to="/Politics" onClick={() => this.props.changeSearch()}>Politics</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/Crime" onClick={() => this.props.changeSearch()}>Crime</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/Education" onClick={() => this.props.changeSearch()}>Education</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/Entertainment" onClick={() => this.props.changeSearch()}>Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/World" onClick={() => this.props.changeSearch()}>World</Link></li>
                <li className="nav-item"><Link className="nav-link text-light" to="/India" onClick={() => this.props.changeSearch()}>India</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Stocks" onClick={() => this.props.changeSearch()}>Stocks</Link></li>
                    <li><Link className="dropdown-item" to="/Sports" onClick={() => this.props.changeSearch()}>Sports</Link></li>
                    <li><Link className="dropdown-item" to="/Cricket" onClick={() => this.props.changeSearch()}>Cricket</Link></li>
                    <li><Link className="dropdown-item" to="/t20" onClick={() => this.props.changeSearch()}>T20 WorldCup</Link></li>
                    <li><Link className="dropdown-item" to="/Science" onClick={() => this.props.changeSearch()}>Science</Link></li>
                    <li><Link className="dropdown-item" to="/Technology" onClick={() => this.props.changeSearch()}>Technology</Link></li>
                    <li><Link className="dropdown-item" to="/Jokes" onClick={() => this.props.changeSearch()}>Jokes</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><button className="dropdown-item" onClick={() => this.props.changelanguage("hi")}>Hindi</button></li>
                    <li><button className="dropdown-item" onClick={() => this.props.changelanguage("en")}>English</button></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
                <input className="form-control me-2" name='search' value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
