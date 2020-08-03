export function updatePessoalRequest(data){
    return{
        type: '@user/UPDATE_PESSOAL_REQUEST',
        payload: { data },
    };
}

export function updatePessoalSuccess(user){
    return{
        type: '@user/UPDATE_PESSOAL_SUCCESS',
        payload: { user },
    };
}

export function updatePessoalFailure(){
    return{
        type: '@user/UPDATE_PESSOAL_FAILURE',
    };
}

export function updateProfileImgRequest(id, img_id){
    return{
        type: '@user/UPDATE_PROFILE_IMG_REQUEST',
        payload: { id, img_id },
    };
}

export function updateProfileImgSuccess(user){
    return{
        type: '@user/UPDATE_PROFILE_IMG_SUCCESS',
        payload: { user },
    };
}