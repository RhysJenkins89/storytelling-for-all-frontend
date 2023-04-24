import React, { useEffect, useState } from "react";
import landingImage from "../assets/woman-talking-unsplash.jpg";
import ClipLoader from "react-spinners/ClipLoader";
import styles from "../styles/ImageMain.module.scss"

const ImageMain = () => {
    // const [mainImage, setMainImage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // const getImage = async () => {
        //     let response = await fetch("http://localhost:1337/api/upload/files")
        //     let imageData = await response.json()
        //     console.log(imageData)
        //     setMainImage(imageData)
        //     setLoading(false)
        // }
        // getImage()
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [])

    return (
        <>
            {
                loading ? 
                    <ClipLoader
                        loading={loading}
                        size={100}
                        aria-label="Loading spinner"
                    />        
                : 
                <>
                    <div className={styles.imageContainer}>
                        <img className={styles.mainImage} src={landingImage} alt="Main landing image"/>
                    </div>
                </>
            }
        </>
    )
}

export default ImageMain