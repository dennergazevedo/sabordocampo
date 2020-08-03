import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updatePessoalSuccess, updatePessoalFailure, updateProfileImgSuccess } from './actions';

export function* updatePessoal({ payload }){
    try{
        const { id } = payload.data;

        const response = yield call (api.put, `update_collab/${id}`, payload.data);

        toast.success('Perfil atualizado com sucesso!', { position: "bottom-center" });

        yield put(updatePessoalSuccess(response.data));
    } catch (err){
        toast.error('Erro ao atualizar perfil', { position: "bottom-center" });
        yield put(updatePessoalFailure());
    }
}

export function* updateProfileImg({ payload }){
    try{
        const { id, img_id } = payload;

        const response = yield call (api.put, `update_collab/${id}`, {
            img_id,
        });

        toast.success('Foto atualizada com sucesso!', { position: "bottom-center" });

        yield put(updateProfileImgSuccess(response.data));

        setTimeout(function(){window.location.reload()},2000)
    } catch (err){
        toast.error('Erro ao atualizar perfil', { position: "bottom-center" });
        yield put(updatePessoalFailure());
    }
}

export default all([
    takeLatest('@user/UPDATE_PESSOAL_REQUEST', updatePessoal),
    takeLatest('@user/UPDATE_PROFILE_IMG_REQUEST', updateProfileImg),
]);