import classNames from 'classnames/bind';
import styles from './updateInfo.module.scss'
import { useState } from 'react';
const cx = classNames.bind(styles)

function UpdateInfo() {
    const [appear,setAppear] = useState(false)
    return (
        <div className={cx('wrapper')}>
            <button onClick={()=>{setAppear(!appear)}}>Edit</button>
            {appear && (
                <>
                    <div className={cx('show')}>
                        <div>
                            <label>Nhập email:</label>
                            <input type="text" />
                            <button>Tìm</button>
                        </div>
                    </div>
                    <div className={cx('change-info')}>
                       <div>
                            <label>Họ tên:</label>
                            <input style={{display: 'block'}} type="text" />
                            <label >Giới tính:</label>
                            <select>
                                <option value="nam">Name</option>
                                <option value='nu'>Nữ</option>
                            </select>
                            
                       </div>
                       <div>
                            <label>Ngày sinh:</label>
                            <input type="date" style={{display: 'block'}}/>
                            <label>Role</label>
                            <select>
                                <option value='admin'>Admin</option>
                                <option value='user'>user</option>
                            </select>
                       </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <button className={cx('btn-ok')}>Ok</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default UpdateInfo;