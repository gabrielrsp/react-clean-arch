import React, { memo } from 'react'
import { Logo } from '../logo/logo'
import Styles from './login-header-styles.scss'

// memo: HOC that avoid re-render compoenent if props has not changed
export const LoginHeader: React.FC = memo(() => {
  return (
    <header className={Styles.header}>
      <Logo/>
      <h1>4Dev - Enquetes para Progamadores</h1>
    </header>
  )
})

/*
Do you need React memo?

DON'T USE IT If the component isn't heavy and usually renders with different props, 
 
Use the following rule of thumb: 

don't use memoization if you can't quantify the performance gains. 
Performance-related changes applied incorrectly can even harm performance.

*/