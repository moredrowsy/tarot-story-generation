import { seasons, storyTypes } from "../lib/constants";

export type Season = typeof seasons[number];

export type StoryType = typeof storyTypes[number];

export type TarotCardEntity = {
  id: string;
  name: string;
  arcana: "major" | "minor";
  suit: null | "cups" | "pentacles" | "swords" | "wands";
  character: string;
  upright: string;
  reversed: string;
  fortune: string;
};
