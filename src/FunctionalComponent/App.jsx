import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'

export default function App() {
    let [language, setLanguage] = useState("hi")
    let [search, setSearch] = useState("")
    let changelanguage = (data) => {
        setLanguage(data)
    }
    let changeSearch = (data) => {
        setSearch(data)
    }

    return (
        <BrowserRouter>
            <Navbar changelanguage={changelanguage} changeSearch={changeSearch} />
            <Routes>
                <Route path='' element={<Home language={language} q={search ? search : "All"} />} />
                <Route path='/All' element={<Home language={language} q={search ? search : "All"} />} />
                <Route path='/Politics' element={<Home language={language} q={search ? search : "Politics"} />} />
                <Route path='/Crime' element={<Home language={language} q={search ? search : "Crime"} />} />
                <Route path='/Education' element={<Home language={language} q={search ? search : "Education"} />} />
                <Route path='/Entertainment' element={<Home language={language} q={search ? search : "Entertainment"} />} />
                <Route path='/World' element={<Home language={language} q={search ? search : "World"} />} />
                <Route path='/India' element={<Home language={language} q={search ? search : "India"} />} />
                <Route path='/Sports' element={<Home language={language} q={search ? search : "Sports"} />} />
                <Route path='/Cricket' element={<Home language={language} q={search ? search : "Cricket"} />} />
                <Route path='/Science' element={<Home language={language} q={search ? search : "Science"} />} />
                <Route path='/Technology' element={<Home language={language} q={search ? search : "Technology"} />} />
                <Route path='/Jokes' element={<Home language={language} q={search ? search : "Jokes"} />} />
                <Route path='/Stocks' element={<Home language={language} q={search ? search : "Stocks"} />} />
                <Route path='/t20' element={<Home language={language} q={search ? search : "T20"} />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

