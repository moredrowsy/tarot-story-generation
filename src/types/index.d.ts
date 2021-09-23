import { orientations, seasons, storyTypes, tenses } from '../lib';

export type Orientation = typeof orientations[number];

export type Season = typeof seasons[number];

export type StoryType = typeof storyTypes[number];

export type TarotCardEntity = {
  id: string;
  name: string;
  arcana: 'major' | 'minor';
  suit: null | 'cups' | 'pentacles' | 'swords' | 'wands';
  character: string;
  upright: string;
  reversed: string;
  fortune: string;
};

export type Tense = typeof tenses[number];
