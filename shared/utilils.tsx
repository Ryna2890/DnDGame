import { GameStyle } from "./gameStyle";
import { GameType } from "../pages";

export const getRandomLettersInRange = (count: number): string[] => {
  let letters = [
    "А",
    "Б",
    "В",
    "Г",
    "Д",
    "Е",
    "Ё",
    "Ж",
    "З",
    "И",
    "Й",
    "К",
    "Л",
    "М",
    "Н",
    "О",
    "П",
    "Р",
    "С",
    "Т",
    "У",
    "Ф",
    "Х",
    "Ц",
    "Ч",
    "Ш",
    "Щ",
    "Ь",
    "Ы",
    "Ъ",
    "Э",
    "Ю",
    "Я",
  ];
  let result: string[] = [];

  while (result.length < count) {
    const randomLetters = Math.floor(Math.random() * (33 - 1)) + 1;
    if (!result.includes(letters[randomLetters])) {
      result.push(letters[randomLetters]);
    }
  }
  return result;
};

export const getRandomNumbersInRange = (
  min: number,
  max: number,
  count: number
): number[] => {
  let result: number[] = [];

  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
};

export const changeRange = (
  someType: GameType
): { min: number; max: number } => {
  switch (someType) {
    case "9":
      return { min: 1, max: 9 };
    case "19":
      return { min: 9, max: 19 };
    case "50":
      return { min: 19, max: 50 };
    case "99":
      return { min: 50, max: 99 };
    case "999":
      return { min: 99, max: 999 };
    default:
      return { min: 1, max: 19 };
  }
};

const themes = 4;

export const styleChange = (someStyle: GameStyle[]) => {
  const randomIndex = Math.floor(Math.random() * themes);
  return someStyle[randomIndex];
};
