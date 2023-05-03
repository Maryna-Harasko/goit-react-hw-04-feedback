import { useEffect, useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";


export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [precentPositive, setPrecentPositive] = useState(0)

  
useEffect (()=>{
  setTotal(good + neutral + bad);
  
  setPrecentPositive( Math.round((good / total) * 100))
}, [good, neutral, bad, total])

const handleFeedback = (type) => {
  switch(type){
    case 'good':
      setGood(prevState => prevState + 1);
      break;
    case 'neutral':
      setNeutral(prevState => prevState + 1);
      break;
    case 'bad':
      setBad(prevState => prevState + 1);
      break;
    default:
      throw new Error(); 
  }
}

return(
  <Container>
    <Section title="Please leave feedback">
        <FeedbackOptions 
        onLeaveFeedback={handleFeedback}
        />
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
