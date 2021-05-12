import { SALVAR_PROFISSIONAL } from '../actions/actionType';

const initialState = {
    nome: null,
    cpf: null,
    celular: null,
    endereco : null,
    tipoProfissioanal: null,
    email: null,
    senha: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SALVAR_PROFISSIONAL:
            return {
                ...state,
                nome: action.payload.nome,
                cpf: action.payload.cpf,
                celular: action.payload.celular,
                endereco : action.payload.endereco,
                tipoProfissioanal: action.payload.tipoProfissioanal,
                email: action.payload.email,
                senha: action.payload.senha,
            };    
        default:
            return state;
    }
};

export default reducer;