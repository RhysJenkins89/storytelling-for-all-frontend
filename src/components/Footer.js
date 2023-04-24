import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <h1>Storytelling for all</h1>
            </div>
            <div className={styles.itemsCont}>
                <p>About</p>
                <p>Contact</p>
            </div>
        </footer>
    )
}

export default Footer