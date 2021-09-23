import * as EnglishVerbs from 'english-verbs-helper';
import Irregular from 'english-verbs-irregular/dist/verbs.json';
import Gerunds from 'english-verbs-gerunds/dist/gerunds.json';

import {
  Orientation,
  Season,
  StoryType,
  TarotCardEntity,
  Tense,
} from '../types';
import { seasons } from './constants';
import { getRandomInt } from '../utils';

const VerbsData = EnglishVerbs.mergeVerbsData(Irregular, Gerunds);

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
    ${transformPhrase(cards[0][orientations[0]], 'PROGRESSIVE')}.`,
    `But when ${cards[0].character} ${transformPhrase(
      cards[1][orientations[1]],
      'PRESENT'
    )},
    they ${transformPhrase(cards[2][orientations[2]], 'PRESENT', 'P')}.`,
    `Now it's up to their best friend ${cards[3].character} to
    ${transformPhrase(
      cards[3][orientations[3]],
      'PRESENT',
      'P'
    )}, and in doing so help
    ${cards[0].character} ${transformPhrase(
      cards[4][orientations[4]],
      'PRESENT',
      'P'
    )}.`,
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
    `${cards[0].character} wants most of all to ${transformPhrase(
      cards[0][orientations[0]],
      'PRESENT',
      'P'
    )},
    and all they need to do to get there is ${transformPhrase(
      cards[1][orientations[1]],
      'PRESENT',
      'P'
    )}.`,
    `Things are looking up in response, and ${cards[0].character} finds
    themselves ${transformPhrase(cards[2][orientations[2]], 'PROGRESSIVE')}.`,
    `But then the tide turns and ${cards[0].character} is
    ${transformPhrase(cards[3][orientations[3]], 'PAST')}.`,
    ` Will they make it through, or will ${cards[0].character} be remembered
    only for ${transformPhrase(cards[4][orientations[4]], 'PROGRESSIVE')}?`,
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
  return String.raw`This ${season}, expect ${card.fortune}.`;
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

/**
 * Transform phrase to the specified tense
 * @param {string} phrase A phrase starting with a present tense verb
 * @param {Tense} tense A tense type to transform
 * @returns {string} transformed phrase
 */
export function transformPhrase(
  phrase: string,
  tense: Tense,
  nounNumber: EnglishVerbs.Numbers = 'S'
) {
  if (phrase.length === 0) return phrase;
  const firstSpace = phrase.indexOf(' ');
  const verb = phrase.substring(0, firstSpace);
  const transformed =
    tense === 'PROGRESSIVE'
      ? EnglishVerbs.getIngPart(VerbsData[verb], verb)
      : EnglishVerbs.getConjugation(VerbsData, verb, tense, nounNumber, {});

  return phrase.replace(verb, transformed);
}
