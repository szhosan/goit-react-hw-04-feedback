import React from 'react';
import s from './FeedBackControlPanel.module.css';

const FeedbackControlPanel = ({ options, onLeaveFeedback }) => {
  const items = Object.keys(options);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {items.map(item => {
          const buttName = item[0].toUpperCase() + item.slice(1, item.length);
          return (
            <li className={s.item} key={item}>
              <button
                className={s.button}
                onClick={() => onLeaveFeedback(item)}
              >
                {buttName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeedbackControlPanel;
