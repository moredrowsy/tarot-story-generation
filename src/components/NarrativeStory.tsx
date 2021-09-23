import React from 'react';
import { Orientation, StoryType, TarotCardEntity } from '../types';
import { generatComedy, generateTagline, generateTragedy } from '../lib';

const NarrativeStory: React.FC<Props> = ({
  cards,
  orientations,
  storyType,
}) => {
  let story: string[] = [];
  const tagline = generateTagline(cards[0]);

  switch (storyType) {
    case 'comedy':
      story = generatComedy(cards, orientations);
      break;
    case 'tragedy':
      story = generateTragedy(cards, orientations);
      break;
    default:
  }

  return (
    <div className={`bg-white mx-auto m-5 p-5 rounded shadow-lg`}>
      <div className='font-bold text-lg mb-5'>{tagline}</div>
      <div className='text-gray-700'>
        {story.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default NarrativeStory;

type Props = {
  cards: TarotCardEntity[];
  orientations: Orientation[];
  storyType: StoryType;
};
