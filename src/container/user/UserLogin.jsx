import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'
import { Nav } from 'react-router-dom'

const UserLogin = () => {
    const [userid, setUserid] = useState()
    const [userpw, setUserpw] = useState()
    // const userData = {
    //     userid : userid, 
    //     userpw // key, value 값이 같으면 생략 가능
    // }
    const login = e => {
        e.preventDefault()
        alert(`로그인 아이디: ${userid}, 비밀번호 ${userpw}`)
        axios.post(``, {userid, userpw}) // 위에 주석처리 된 코드와 같은 내용, 바깥은 상수로 정의한거고 지금은 바로 써버린 것
            .then(res => {
                alert('Success')
            })
            .catch(error => {
                alert('Fail')
            })
    }
    const cancel = e => {
        e.preventDefault()
        alert(`취소 버튼 클릭 !{}`)
    }

    return (<User>
    <h1>로그인</h1>
    <table className="tab_layer">
        <tr>
            <td>ID</td>
            <td><input type="text" onChange={e => setUserid(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="text" onChange={e => setUserpw(`${e.target.value}`)}/></td>
        </tr>
        <tr>
            <td colSpan='2'>
                <input type="button" value="LOGIN" onClick={login}/>
                <input type="button" value="CANCEL" onClick={cancel}/>
            </td>
            
        </tr>
    </table>
    </User>)
    }
export default UserLogin