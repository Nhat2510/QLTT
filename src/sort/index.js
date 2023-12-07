import classNames from "classnames/bind";
import styles from './sort.module.scss'
import { useContext } from "react";
import { ContextData } from "../context";
const cx = classNames.bind(styles)
function Sort({setData}) {
    const [states,dispatch] = useContext(ContextData)
    const handleRole = e =>{
        const value = e.target.value

        setData(props=>{
            const newData = [...states]
            const arr = newData.filter(item=> item.role === value)
            return arr
        })
    }
    const handleSort = e =>{
        const value = e.target.value
        if(value === 'name'){
            setData(props=>{
                const newData = [...props]
                newData.sort((a,b)=>{
                    const name1 = a.name.toLowerCase()
                    const name2 = b.name.toLowerCase()
                    if(name1<name2) return -1
                    if(name1>name2) return 1
                    return 0
                })
                return newData
            })
        }
        else if(value === 'date'){
            
            setData(props=>{
                const newData = [...props]
                newData.sort((a, b) => {
                    const dateA = new Date(a.birthdate);
                    const dateB = new Date(b.birthdate);
                    return dateA - dateB;
                });
                return newData
            })
        }
    }
    return (  
        <div className={cx('wrapper')}>
            <div>
                <label>Role: </label>
                <select onChange={handleRole}>
                    <option value="de">Role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </div>
            <div>
                <label>Sort: </label>
                <select onClick={handleSort}>
                    <option value="de">Sort</option>
                    <option value="name">Name</option>
                    <option value="date">Ngaysinh</option>
                </select>
            </div>
        </div>
    );
}

export default Sort;