import classNames from "classnames/bind";
import styles from './global.module.scss'
import Sort from "../sort";
import UpdateInfo from "../updateInfo/idnex";
import { useContext, useEffect, useState } from "react";
import { ContextData } from "../context";
import axios from "axios";
const cx =classNames.bind(styles)


function Global() {
    const [states,dispatch] = useContext(ContextData)
    const [data,setData] = useState(states)

    useEffect(()=>{
        (async()=>{
            const data = await axios.get('/users/all')
            console.log(data);
        })()
    },[])
    return (<div className={cx('wrapper')}>
        <div className={cx('container')}>
            <h1>View Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,i)=>{
                        
                        return <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.name}</td>
                            <td>{item.birthdate.toISOString()}</td>
                            <td>{item.sex}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Sort setData={setData}/>
            <UpdateInfo setData={setData}/>
        </div>
    </div>);
}

export default Global;