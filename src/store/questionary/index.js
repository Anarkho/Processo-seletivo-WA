export const questionaryReducer = (state, action) => {
    switch (action.type) {
        case 'QUANTIDADE':
            return { ...state, quantidade: action.payload }
        case 'QUESTOES':
            return { ...state, questoes: action.payload }
        default:
            return state
    }
}