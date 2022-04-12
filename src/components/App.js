import { useState } from 'react';
import FeedbackControlPanel from './FeedBackControlPanel/FeedBackControlPanel';
import Statistics from './FeedbackStatisticsPanel/FeedbackStatisticsPanel';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (state.good * 100) / countTotalFeedback()
    );
    return positivePercentage ? positivePercentage : 0;
  };

  const countFeedBack = item => {
    let feedbackObj = {};
    setState(prevState => {
      feedbackObj = { ...prevState };
      feedbackObj[item] = feedbackObj[item] + 1;
      return feedbackObj;
    });
  };

  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackControlPanel options={state} onLeaveFeedback={countFeedBack} />
      </Section>

      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
}

export default App;
