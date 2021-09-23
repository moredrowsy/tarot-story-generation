import { Orientation, Season, StoryType, TarotCardEntity } from '../types';
import { seasons } from './constants';
import { getRandomInt } from '../utils';

/**
 * Generate a templated story from tarot cards.
 * @param {TarotCardEntity[]} cards Array of 5 tarot cards
 * @returns {string[]} story
 */
export function generatComedy(
  cards: TarotCardEntity[],
  orientations: Orientation[]
): string[] {
  return [
    `${cards[0].character} is the best in the world at one thing:
    ${cards[0][orientations[0]]}.`,
    `But when ${cards[0].character} ${cards[1][orientations[1]]},
    they ${cards[2][orientations[2]]}.`,
    `Now it's up to their best friendv${cards[3].character} to
    ${cards[3][orientations[3]]}, and in doing so help
    ${cards[0].character} ${cards[4][orientations[4]]}.`,
  ];
}

/**
 * Generate a templated story from tarot cards.
 * @param {TarotCardEntity[]} cards Array of 5 tarot cards
 * @returns {string[]} story
 */
export function generateTragedy(
  cards: TarotCardEntity[],
  orientations: Orientation[]
): string[] {
  return [
    `${cards[0].character} wants most of all to ${cards[0][orientations[0]]},
    and all they need to do to get there is ${cards[1][orientations[1]]}.`,
    `Things are looking up in response, and ${cards[0].character} finds
    themselves ${cards[2][orientations[2]]}.`,
    `But then the tide turns and ${cards[0].character} is
    ${cards[3][orientations[3]]}.`,
    ` Will they make it through, or will ${cards[0].character} be remembered
    only for ${cards[4][orientations[4]]}?`,
  ];
}

/**
 * Generate tagline from a tarot card with a specified or random season.
 * @param {TarotCardEntity} card A tarot card
 * @param {Season|undefined} season One of the four seasons
 * @returns {string} tagline
 */
export function generateTagline(
  card: TarotCardEntity,
  season: Season | undefined = undefined
): string {
  if (!season) season = seasons[getRandomInt(0, 3)];
  return String.raw`This ${season}, ${card.fortune}.`;
}

/**
 * Generate card orientations based on story type.
 * @param {TarotCarStoryTypedEntity} storyType A tarot card
 * @returns {Orientation[]} orientations
 */
export function generateCardOrientations(storyType: StoryType) {
  let orientations: Orientation[] = [];

  switch (storyType) {
    case 'comedy':
      orientations = ['upright', 'reversed', 'reversed', 'upright', 'upright'];
      break;
    case 'tragedy':
      orientations = ['upright', 'reversed', 'upright', 'reversed', 'reversed'];
      break;
    default:
  }

  return orientations;
}
