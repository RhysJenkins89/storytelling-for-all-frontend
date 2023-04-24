import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/Nav.module.css"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener('resize', () => {});
          }
    }, [])

    return (
        <nav className={styles.mainNav}>
            {/* Main logo */}
            <div className={styles.logoContainer}>
                <h1>Storytelling for all</h1>
            </div>

            {/* Items container */}
            <div className={`${styles.itemsContainer} ${isOpen ? styles.isOpen : ""}`} onClick={() => width < 800 ? setIsOpen(!isOpen) : ""}>
                <p>
                    <Link to={'/posts'}>Blog</Link>
                </p>
                <p>
                    <Link to={'/about'}>About</Link>
                </p>
                <p>
                    <Link to={'/contact'}>Contact</Link>
                </p>
                <p>
                    <Link to={'/books'}>Books</Link>
                </p>
            </div>

            {/* Hamburger menu */}
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
                <span className={isOpen ? styles.isOpen : ""}></span>
                <span className={isOpen ? styles.isOpen : ""}></span>
                <span className={isOpen ? styles.isOpen : ""}></span> 
            </div>

            {/* Overlay */}
            {
                width < 800 ? 
                    <div className={`${styles.overlay } ${isOpen && styles.isOpen}`} onClick={() => setIsOpen(!isOpen)}></div>
                :
                <></>
            }
        </nav>
    )
}

export default Nav