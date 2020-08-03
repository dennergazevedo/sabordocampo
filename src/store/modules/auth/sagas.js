import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }){
    try{
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        
        yield put(signInSuccess(token, user));
        toast.success('Logado com sucesso.', { position: "bottom-center" });
    }catch(err){
        toast.error('Falha na autenticação, verifique seus dados.', { position: "bottom-center" });
        yield put(signFailure());
    }

}

export function setToken({ payload }){
    if(!payload) return;

    const { token } = payload.auth;

    if (token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut(){
    toast.success('Deslogado com sucesso! Redirecionando...', { position: "bottom-right" });
    setTimeout(function(){window.location.reload()}, 2000)
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut),
]);