import React from "react";
import styles from "../styles/PostsSection.module.scss";

const CardImage = ({image}) => {
    console.log('prop image:', image)
    return (
        <>
            <div className={styles.cardImageContainer}>
                {
                    !image ? 
                        <p>Content loading.</p>        
                    :
                    <img className={styles.cardImage} src={image} alt="Card image"/>
                }
            </div>
        </>
    )
};

export default CardImage;