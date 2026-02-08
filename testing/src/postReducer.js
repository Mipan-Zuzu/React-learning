export const initial = {
    loading : false,
    data : [],
    error: false
}

export const handleReducer = (state, action) => {
    switch(action.type){
        case("starting"):
        return {
            loading : true,
            data : [],
            error: false
        }
        case("fetch"):
        return {
            loading: false,
            data : action.payload,
            error : false
        }
        case("error"):
        return{
            loading : false,
            data : [],
            error : true
        }
    }
}