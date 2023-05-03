import React from "react";
import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  precentPositive,
}) =>{
  return (
    <StatisticsList>
    <StatisticsItem>Good: {good}</StatisticsItem>
    <StatisticsItem>Neutral: {neutral}</StatisticsItem>
    <StatisticsItem>Bad: {bad}</StatisticsItem>
    <StatisticsItem>Total: {total}</StatisticsItem>
    <StatisticsItem>Positive feedback: {precentPositive}%</StatisticsItem>
  </StatisticsList>
  )
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  precentPositive: PropTypes.number.isRequired,
}