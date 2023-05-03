import React from "react";
import PropTypes from 'prop-types';
import { NotificationContainer } from "./Notification.styled";

export const Notification = ({title}) => {
  return (
    <NotificationContainer>
      <h2>{title}</h2>
    </NotificationContainer>
  )
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
}