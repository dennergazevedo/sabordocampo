import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateUserSuccess, updateUserFailure, updateProfileImgSuccess } from './actions';

export function* updateUser({ payload }){
    try{
        const { id } = payload.data;

        const response = yield call (api.put, `update_user/${id}`, payload.data);

        toast.success('Perfil atualizado com sucesso!', { position: "bottom-center" });

        yield put(updateUserSuccess(response.data));
    } catch (err){
        toast.error('Erro ao atualizar perfil', { position: "bottom-center" });
        yield put(updateUserFailure());
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
        yield put(updateUserFailure());
    }
}

export default all([
    takeLatest('@user/UPDATE_USER_REQUEST', updateUser),
    takeLatest('@user/UPDATE_PROFILE_IMG_REQUEST', updateProfileImg),
]);