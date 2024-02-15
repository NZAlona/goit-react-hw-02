import { useState } from 'react';
import Description from './components/Description/Description';
import './App.css';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/notification';

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setClicks({
      ...clicks,
      [feedbackType]: clicks[feedbackType] + 1,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  return (
    <>
      <article>
        <Description />
        <Options onUpdate={updateFeedback} totalSum={totalFeedback} />
        <Notification text="No feedback yet" sum={totalFeedback} />

        <Feedback value={clicks.good} totalSum={totalFeedback}>
          Good
        </Feedback>
        <Feedback value={clicks.neutral} totalSum={totalFeedback}>
          Neutral
        </Feedback>
        <Feedback value={clicks.bad} totalSum={totalFeedback}>
          Bad
        </Feedback>
      </article>
    </>
  );
}
