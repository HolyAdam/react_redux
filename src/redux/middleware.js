import { showAlert } from "./actions"
import { CREATE_POST } from "./types"

const spam = ['fuck', 'multi', 'php']

export function spamWordsMiddleware({ dispatch }) {

    return function(next) {
        return function(action) {
            if (action.type === CREATE_POST) {
                const found = spam.filter(word => action.payload.title.includes(word))
                if (found.length) {
                    return dispatch(showAlert('ВЫ СПАМЕР!'))
                }
            }

            return next(action)
        }
    }

}