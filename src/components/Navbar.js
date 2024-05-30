import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="flex-start" spacing={{lg:20, md:10, sm:5, xs:2}}>
        <Link to="/">
            <img src={Logo} alt="Logo" style={{width: 75, height: 75}} />
        </Link>
        <Stack direction="row" spacing={2} alignItems="flex-end">
            <Link to="/">
                Home
            </Link>
            <Link to="/exercises">
                Exercises
            </Link>
        </Stack>
    </Stack>
  )
}

export default Navbar