import React, {useState} from 'react'
import axios from 'axios'
import { User } from '../../templates'

const UserRegister = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [gender, setGender] = useState()

    const signup = e => {
        e.preventDefault()
        const userData = {
            userid,
            password,
            name,
            gender
        }
        alert(`유저 정보: ${userData.userid}`)
        axios.post('', {userData})
        .then(
            console.log('SIGN UP SUCCESS')
        )
        .catch(
            console.log('SIGN UP FAILED')
        )
    }

    return (<User>
        <h1>User Register</h1>
        <table className="tab_layer">
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
                <td>Gender</td>
                <td><input type="text" onChange = {e => setGender(e.target.value)}/></td>
            </tr>
            <tr>
                <td><button onClick = {signup}></button></td>
                <td></td>
            </tr>
        </table>
    </User>)
}

export default UserRegister
