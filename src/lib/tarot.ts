import { Position, Season, StoryType, TarotCardEntity } from '../types';
import { seasons } from './constants';
import { getRandomInt } from '../utils';

/**
 * Generate a templated story from tarot cards.
 * @param {TarotCardEntity[]} cards Array of 5 tarot cards
 * @returns {string} story
 */
export function generatComedy(cards: TarotCardEntity[]): string {
  return String.raw`${cards[0].character} is the best in the world at one thing:
    ${cards[0].upright}. But when ${cards[0].character} ${cards[1].reversed},
    they ${cards[2].reversed}. Now it's up to their best friend
    ${cards[3].character} to ${cards[3].upright}, and in doing so help
    ${cards[0].character} ${cards[4].upright}.`;
}

/**
 * Generate a templated story from tarot cards.
 * @param {TarotCardEntity[]} cards Array of 5 tarot cards
 * @returns {string} story
 */
export function generateTragedy(cards: TarotCardEntity[]): string {
  return String.raw`${cards[0].character} wants most of all to
    ${cards[0].upright}, and all they need to do to get there is
    ${cards[1].reversed}. Things are looking up in response,
    and ${cards[2].character} finds themselves ${cards[2].upright}.
    But then the tide turns and ${cards[0].character} is ${cards[3].reversed}.
    Will they make it through, or will ${cards[4].character} be remembered
    only for ${cards[4].reversed}?`;
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
 * Generate card positions based on story type.
 * @param {TarotCarStoryTypedEntity} storyType A tarot card
 * @returns {Position[]} positions
 */
export function generateCardPositions(storyType: StoryType) {
  let positions: Position[] = [];

  switch (storyType) {
    case 'comedy':
      positions = ['upright', 'reversed', 'reversed', 'upright', 'upright'];
      break;
    case 'tragedy':
      positions = ['upright', 'reversed', 'upright', 'reversed', 'reversed'];
      break;
    default:
  }

  return positions;
}
