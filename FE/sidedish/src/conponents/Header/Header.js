import React from 'react'
import {navList} from '../../constant/nav'
import Nav from './Nav'
import SearchBar from './SearchBar'

import styled from 'styled-components';




const HeaderWrap = styled.header`
    display:flex;
    justify-content: center;
    align-items: center;
    
`

function Header(){
    return (
        <HeaderWrap>
              <h1 className='logo'>
               <img src="https://web.archive.org/web/20190122062652im_/https://cdn.bmf.kr/web/common/bmc-logo.png" alt="모바일 넘버원 반찬가게-배민프레시" />
             </h1>
             <SearchBar/>
        </HeaderWrap>
            //  <Nav/>
    )
}

export default Header;