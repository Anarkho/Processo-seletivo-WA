export const questionaryReducer = (state, action) => {
  switch (action.type) {
    case "QUANTIDADE":
      return { ...state, quantidade: action.payload };
    case "QUESTOES":
      return { ...state, questoes: action.payload };
    case "PONTUACAO":
      return { ...state, pontuacao: action.payload };
    case "ESCOLHIDA":
      return { ...state, escolhida: action.payload };
    case "CORRETAS":
      return { ...state, corretas: action.payload };
    case "ERROS":
      return { ...state, erros: action.payload };
    default:
      return state;
  }
};
