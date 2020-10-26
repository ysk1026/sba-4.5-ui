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
    const login = e => 
        e.preventDefault()
        axios.post(`http://localhost:8080/api/access`, {userid, password})
            .then(res => {
                alert(`Welcome ! ${res.data["name"]}.  ${res.data["userid"]}'s connection is successful. ! `)
    
                sessionStorage.setItem("sessionUser", res.data['userid']);
                window.location.reload()
                history.push("/home");
                    
            })
            .catch(error => {
                alert("Please check your ID or password.");
                window.location.reload();
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