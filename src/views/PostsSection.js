import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "../styles/PostsSection.module.scss"
import image from "../assets/woman-talking-unsplash.jpg";
import CardImage from "../components/CardImage";

const PostsSection = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const getPosts = async () => {
            let response = await fetch("http://localhost:1337/api/posts?populate=*")
            let postsData = await response.json()
            setPosts(postsData.data)
            setLoading(false)
        }
        getPosts()
    }, [])

    return (
        <section className={styles.postsSection}>
            <h2>Upcoming events</h2>
            <div className={styles.mainContainer}>
            {
                loading ? 
                <p>Content is loading.</p>
                :
                posts.map((post) => {
                    console.log('post:', post.attributes.Image.data.attributes)
                    return (
                        <div className={styles.cardContainer} key={post.id}>
                            <div className={styles.cardImageContainer}>
                                <CardImage className={styles.cardImage} image={`http://localhost:1337${post.attributes.Image.data.attributes.url}`} />
                                {/* Add the correct url on the live site */}
                            </div>
                            <div className={styles.textContainer}>
                                <h2 className={styles.header}>{post.attributes.Title}</h2>
                                {
                                    post.attributes.Date ? 
                                    <p className={styles.date}>{new Date(post.attributes.Date).toLocaleDateString()}</p>
                                    :
                                    null
                                }
                                <p>{post.attributes.Subheading}</p>
                                {/* <h2>{post.attributes.Body}</h2> */}
                                <Link className={styles.link} to={`/posts/${post.id}`}>View details</Link>
                            </div>
                        </div>
                    )
                })   
            }
            </div>
        </section>
    )
}

export default PostsSection

// *** To do ***
// Add a section header
// Make a simple card design 