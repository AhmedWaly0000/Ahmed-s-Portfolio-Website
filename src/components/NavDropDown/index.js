import React from 'react'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { FaLocationArrow } from "react-icons/fa"

import { DropDownContainer, DropDownIcon, DropDownItem, DropDownItemDesc, DropDownItemTitle, DropDownTextContainer } from './NavDropDown'

const NavDropDown = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
        <AiFillPhone/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Phone</DropDownItemTitle>
        <DropDownItemDesc>Let's get together and have a chat?'</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <AiOutlineMail/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Email</DropDownItemTitle>
        <DropDownItemDesc>If you want to talk, send me a message and I will get back to you.</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
    <DropDownItem href="#" target="_blank" rel="noreferrer">
      <DropDownIcon>
      <FaLocationArrow/>
      </DropDownIcon>
      <DropDownTextContainer>
        <DropDownItemTitle>Address</DropDownItemTitle>
        <DropDownItemDesc>4417 Benhurst Ave, San Diego, CA</DropDownItemDesc>
      </DropDownTextContainer>
    </DropDownItem>
  </DropDownContainer>
);

export default NavDropDown
