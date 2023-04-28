import React, { useEffect, useState } from "react"
import ImageMain from "../components/ImageMain"
import styles from "../styles/Landing.module.scss"

const Landing = () => {
    const [responseAll, setResponseAll] = useState({title: null, subheading: null, intro: null})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const [responseTitle, responseSubheading, responseIntro] = await Promise.all([
                fetch("http://localhost:1337/api/main-title"), 
                fetch("http://localhost:1337/api/subheading"),
                fetch("http://localhost:1337/api/intro-text"),
            ])
            setResponseAll({
                title: await responseTitle.json(), 
                subheading: await responseSubheading.json(),
                intro: await responseIntro.json(),
            })
            setLoading(false)
        }
        getData()
    }, [])
    
    return (
        <>
            {
                loading ? 
                    <p>Content is loading...</p> 
                :
                <section className={styles.landingSection}>
                    <div className={styles.landingContainer}>
                        <div className={styles.imageComponentContainer}> 
                            <ImageMain />
                        </div>
                        {/* Change this. I can't call it the container of words. */}
                        <div className={styles.wordsContainer}>
                            <div className={styles.headingContainer}>
                                <h1 className={styles.title}>{responseAll.title.data.attributes.title}</h1> 
                                <h2 className={styles.subheading}>{responseAll.subheading.data.attributes.subheading}</h2>   
                            </div>
                            <div className={styles.textContainer}>
                                <p className={styles.text}>{responseAll.intro.data.attributes.introduction}</p>    
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Landing
