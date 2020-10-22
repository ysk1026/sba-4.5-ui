import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'

const UserModify = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [address, setAddress] = useState()

    const modify = e => {
        e.preventDefault()
        const userdata = {
            userid,
            password,
            name,
            address
        }
        alert(`<유저 정보 변경 됨> ID: ${userdata.userid}, 비밀번호 ${userdata.password},\
                이름: ${userdata.name}, 주소: ${userdata.address}`)
        axios.post('', {userdata})
        .then(res =>{
            console.log("SUCCESS")
        })
        .catch(
            console.log("FAIL...")
        )
    }
    return (<User>
        <h1>UserModify</h1>
        <table>
            <tr>
                <td>ID</td>
                <td><input type="text" onChange = {e => setUserid(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="text" onChange = {e => setPassword(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Name</td>
                <td><input type="text" onChange = {e => setName(e.target.value)}/></td>
            </tr>
            <tr>
                <td>Address</td>
                <td><input type="text" onChange = {e => setAddress(e.target.value)}/></td>
            </tr>
            <tr>
                <td><button onClick = {modify}>변경</button></td>
            </tr>
        </table>
    </User>)
}

export default UserModify
