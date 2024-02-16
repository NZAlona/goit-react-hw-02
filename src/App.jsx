import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import './App.css';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/notification';

export default function App() {
  const defaultClicks = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(() => {
    const savedData = window.localStorage.getItem('saved-feedbacks');

    if (savedData !== null) {
      return JSON.parse(savedData);
    }
    return defaultClicks;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedbacks', JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setClicks(defaultClicks);
    } else {
      setClicks({
        ...clicks,
        [feedbackType]: clicks[feedbackType] + 1,
      });
    }
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positivePercent = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100);

  return (
    <>
      <article>
        <Description />
        <Options onUpdate={updateFeedback} totalSum={totalFeedback} />

        {totalFeedback === 0 ? <Notification text="No feedback yet" /> : null}

        <Feedback value={clicks.good} totalSum={totalFeedback}>
          Good
        </Feedback>
        <Feedback value={clicks.neutral} totalSum={totalFeedback}>
          Neutral
        </Feedback>
        <Feedback value={clicks.bad} totalSum={totalFeedback}>
          Bad
        </Feedback>
        <Feedback value={totalFeedback} totalSum={totalFeedback}>
          Total
        </Feedback>
        <Feedback value={positivePercent + '%'} totalSum={totalFeedback}>
          Positive
        </Feedback>
      </article>
    </>
  );
}
