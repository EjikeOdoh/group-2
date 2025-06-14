import React, { useState } from 'react'
import Input from './Input'
import { IoLockClosedOutline } from 'react-icons/io5'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function PasswordInput() {
    const [visible, setIsVisible] = useState(false)
    return (

        <Input label="Password"
            name="password"
            type={visible ? "text" : "password"}
            icon={<IoLockClosedOutline style={{ minWidth: '16px' }} />}
            btn={<button onClick={()=>setIsVisible(!visible)} type='button'>
                {
                    visible ? <FiEyeOff style={{ minWidth: '16px' }} /> :      <FiEye style={{ minWidth: '16px' }} />
                }
          
            </button>
            }
        />
    )
}
