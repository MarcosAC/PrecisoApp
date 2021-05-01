import { SALVAR_PROFISSIONAL } from './ActionType';

export const salvar = profissional => {
    return {
        type: SALVAR_PROFISSIONAL,
        payload: profissional
    };
}; 