import React from "react";
import PropTypes from 'prop-types';
import { SectionContainer } from "./Section.styled";

export const Section = ({title, children}) =>{
  return (
    <SectionContainer>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  )
}

Section.prototype = {
  title: PropTypes.string.isRequired,
}