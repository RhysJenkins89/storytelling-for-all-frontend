import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const PostDetails = () => {
    const [postData, setPostData] =useState(null)
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`http://localhost:1337/api/posts/${params.id}`)
            const responseJson = await response.json()
            setPostData(responseJson)
            setLoading(false)
        }
        getPost()
    }, [])

    return (
        <>
            {
                loading ? <p>Content is loading</p>
                :
                <>
                    <h1>{postData.data.attributes.Title}</h1>
                    <p>{postData.data.attributes.Body}</p>
                    <Link to={'/'}>Home</Link>
                </>
            }
        </>
    )
}

export default PostDetails