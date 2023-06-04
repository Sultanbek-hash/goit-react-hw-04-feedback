import { useState } from "react";
import FeedbackOptions from "./feedBack";
import Statistics from "./Statistics";
import Section from "./section";
import Notification from "./Notification";

export default function App(){
    const[good, setGood] = useState(0);
    const[neutral, setNeutral] = useState(0);
    const[bad, setBad] = useState(0);

    const handleChange = type =>{  
        switch(type){
            case 'good':
                setGood(prevGood => prevGood + 1);
             break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad =>prevBad + 1);
                break;
            default:
                return;         
        }
    }
   const countTotalFeedback = () => {
        return good + neutral + bad;
    }

   const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        return (total ? Math.ceil((good/total)*100) : 0)
    }

const feedBackTypes = Object.keys({good, neutral, bad});
  const totalFeedback = countTotalFeedback();
  const totalPercentage = countPositiveFeedbackPercentage();
    return(
        <Section title="Please leave feedback">
                    <FeedbackOptions 
                    options={feedBackTypes}
                    onLeaveFeedback={handleChange}
                    />
        {totalFeedback === 0 ? (
            <Notification message="No feedback given" />
        ):(    
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentge={totalPercentage}
            />)
        }
        </Section>
        );

}