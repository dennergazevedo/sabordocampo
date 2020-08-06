export function updateUserRequest(data){
    return{
        type: '@user/UPDATE_USER_REQUEST',
        payload: { data },
    };
}

export function updateUserSuccess(user){
    return{
        type: '@user/UPDATE_USER_SUCCESS',
        payload: { user },
    };
}

export function updateUserFailure(){
    return{
        type: '@user/UPDATE_USER_FAILURE',
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