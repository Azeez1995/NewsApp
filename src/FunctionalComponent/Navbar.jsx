import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ changelanguage, changeSearch }) {
  let [search, setSearch] = useState("")

  function postSearch(e) {
    e.preventDefault()
    changeSearch(search)
    setSearch("")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/" onClick={() => changeSearch()}>NewsApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/All" onClick={() => changeSearch()}>All</Link>
              </li>
              <li className="nav-item"><Link className="nav-link text-light" to="/Politics" onClick={() => changeSearch()}>Politics</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/Crime" onClick={() => changeSearch()}>Crime</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/Education" onClick={() => changeSearch()}>Education</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/Entertainment" onClick={() => changeSearch()}>Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/World" onClick={() => changeSearch()}>World</Link></li>
              <li className="nav-item"><Link className="nav-link text-light" to="/India" onClick={() => changeSearch()}>India</Link></li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Other
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/Stocks" onClick={() => changeSearch()}>Stocks</Link></li>
                  <li><Link className="dropdown-item" to="/Sports" onClick={() => changeSearch()}>Sports</Link></li>
                  <li><Link className="dropdown-item" to="/Cricket" onClick={() => changeSearch()}>Cricket</Link></li>
                  <li><Link className="dropdown-item" to="/t20" onClick={() => changeSearch()}>T20 WorldCup</Link></li>
                  <li><Link className="dropdown-item" to="/Science" onClick={() => changeSearch()}>Science</Link></li>
                  <li><Link className="dropdown-item" to="/Technology" onClick={() => changeSearch()}>Technology</Link></li>
                  <li><Link className="dropdown-item" to="/Jokes" onClick={() => changeSearch()}>Jokes</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><button className="dropdown-item" onClick={() => changelanguage("hi")}>Hindi</button></li>
                  <li><button className="dropdown-item" onClick={() => changelanguage("en")}>English</button></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={postSearch}>
              <input className="form-control me-2" name='search' value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

