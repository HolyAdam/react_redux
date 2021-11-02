import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Loader } from './Loader'
import Post from './Post'

export default () => {

    const dispatch = useDispatch()
    const posts = useSelector((state) => state.posts.fetchedPost)
    const loading = useSelector((state) => state.app.loading)

    if (loading) {
        return <Loader />
    }

    if (!posts.length) {
        return <button className="btn btn-success" onClick={() => dispatch(fetchPosts())}>Загрузить посты</button>
    }
    return posts.map(post => <Post post={post} key={post.id} />)
}