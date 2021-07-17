import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


export default function Posts() {

    const dispatch = useDispatch();
    const fetchPosts = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        dispatch({
            type: 'SET_POSTS',
            payload: data,
        })
    }
    useEffect(() => {
        fetchPosts()
    }, []);
    const posts = useSelector(({posts}) => posts);
    console.log({posts})
    return (
        <div>
            {posts.map(post => (
                <div key={post.userId}>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <hr/>
                </div>
            ))}
        </div>
    );


}