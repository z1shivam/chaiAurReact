import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/config'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.account.deleteSession('current').then(() => {
            dispatch(logout())
        })
    }
  return (
    <div>LogoutBtn</div>
  )
}

export default LogoutBtn
