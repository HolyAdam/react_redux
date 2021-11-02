import { CREATE_POST, FETCH_POST } from "./types"

const initState = {
    posts: [],
    fetchedPost: []
}

export const postsReducer = (state = initState, action) => {

    switch(action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: state.posts.concat([action.payload])
            }
            break;
        case FETCH_POST:
            return {
                ...state,
                fetchedPost: action.payload
            }
        default:
            return state
    }

    return state

}