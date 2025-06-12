import { createContext, useReducer } from "react";

export const AuthContext = createContext(null)
export const AuthReducerContext= createContext(null)

function authReducer(state, action) {
    switch (action.type) {
        case true: {
            return action.token
        }

        case false: {
            return null
        }
    
        default:
            break;
    }
}

export default function AuthProvider(props) {

    const [isLoggedIn, dispatch] = useReducer(authReducer, false)

    return (
        <AuthContext value={isLoggedIn}>
            <AuthReducerContext value={dispatch}>
                {props.children}
            </AuthReducerContext>
        </AuthContext>
    )
}