import React from 'react'
import { Nav } from 'react-router-dom'

const UserLogin = () => {
    const login = () => {
        alert("로그인 버튼 클릭")
    }
    const cancel = () => {
        alert("캔슬 버튼 클릭")
    }

    return (<>
    <h1>로그인</h1>
    <table>
        <tr>
            <td>ID</td>
            <td><input type="text"/></td>
        </tr>
        <tr>
            <td>Password</td>
            <td><input type="text"/></td>
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