import { Stack } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <>
        <Stack  
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"space-between"}
        height={"50px"}
        position={"sticky"}
        top={"0"}
        py={2}
        >
        
        <img 
            src='/Threads-logo-black-bg.webp' 
            alt='Threads Logo'
            width={60}
            height={48}
        />

        </Stack>
    </>

  )
}

export default Header