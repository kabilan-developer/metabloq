
const initialState = {
    footershow:null
}

const ConditionReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "EDITPROFILE":
            return{
                footershow:"editprofie"
            }
        case "SIGNUP":
            return {
                footershow:"signup"
            }
        case "SIGNIN":
            return {
                footershow:"signin"
            }
    
        default:
            return state;
    }
}
export default ConditionReducer