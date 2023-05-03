import React, {Component} from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onLeaveFeedback = option => {
    this.setState(prevState =>({
      [option]: prevState[option] +1
    }))
  }

  countTotalFeedback = () =>{
    const {good, neutral, bad} = this.state;
    return good + neutral + bad
  }

  countPositiveFeedbackPercentage = () =>{
    const total = this.countTotalFeedback();
    const {good} = this.state;
    return Math.round((good / total) * 100) || 0;
  }

  render(){
    const {good, neutral, bad} = this.state;
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const precentPositive = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions 
          onLeaveFeedback={this.onLeaveFeedback}
          options={options}/>
         
        </Section>
        {total ? <Section title="Statistics">
          <Statistics 
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            precentPositive={precentPositive}
          />
          </Section> : <Notification title="There is no feedback"/>}
      </Container>
    )
  }
};
