import React, { memo } from 'react'
import Styles from './footer-styles.scss'


// memo: HOC that avoid re-render compoenent if props has not changed
export const Footer: React.FC = memo(() => {
  return (
    <footer className={Styles.footer} />
  )
})

/*
Do you need React memo?

DON'T USE IT If the component isn't heavy and usually renders with different props, 
 
Use the following rule of thumb: 

don't use memoization if you can't quantify the performance gains. 
Performance-related changes applied incorrectly can even harm performance.

*/