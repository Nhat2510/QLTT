import { createContext, useReducer } from "react";
const SAVE = 'save'
const data = [
    {
        name:'ngyen thanh an',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'admin'
    },
    {
        name:'ngyen thanh an',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'admin'
    },
    {
        name:'ngyen thanh c',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'user'
    },
    {
        name:'ngyen thanh bn',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'admin'
    },
    {
        name:'ngyen thanh en',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'admin'
    },
    {
        name:'ngyen thanh ln',
        birthdate: new Date(2000, 1, 1),
        sex:'Nam',
        email:'nguyenthanhanqt@gmai.com',
        role:'user'
    },
]

const reducer = (state, action) =>{
    const {key,value} = action
    switch (key) {
        case SAVE:
            return {...value}
        default:
            break;
    }
}
export const ContextData = createContext()
function Context({children}) {
    const [states,dispatch] = useReducer(reducer,data)
    return ( <ContextData.Provider
        value={[states,dispatch]}
    >{children}</ContextData.Provider>);
}

export default Context ;