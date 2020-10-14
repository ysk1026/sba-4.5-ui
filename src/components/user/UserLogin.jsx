import React, {useState} from 'react'
import axios from 'axios'
import { Nav } from 'react-router-dom'

const UserLogin = () => {
    const [userid, setUserid] = useState()
    const [userpw, setUserpw] = useState()
    const login = e => {
        e.preventDefault()
        alert(`로그인 아이디: ${userid}, 비밀번호 ${userpw}`)
    }
    const cancel = e => {
        e.preventDefault()
        alert(`취소 버튼 클릭 !{}`)
    }

    return (<>
    <h1>로그인</h1>
    <table>
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
    </>)
    }
export default UserLogin