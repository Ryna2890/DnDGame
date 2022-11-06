export interface GameStyle {
  screenBg: string;
  gameBoardBg: string;
  itemImage: string[];
}

export const gameStyle: GameStyle[] = [
  {
    screenBg: "./bg1.svg",
    gameBoardBg: "./gameBoard1.svg",
    itemImage: [
      "./burger.svg",
      "./burger2.svg",
      "./burger3.svg",
      "./burger4.svg",
      "./burger.svg",
    ],
  },
  {
    screenBg: "./bg2.svg",
    gameBoardBg: "./gameBoardBg2.svg",
    itemImage: [
      "./monet1.svg",
      "./monet2.svg",
      "./monet3.svg",
      "./monet4.svg",
      "./monet1.svg",
    ],
  },
  {
    screenBg: "./bg3.svg",
    gameBoardBg: "./gameBoardBg3.svg",
    itemImage: [
      "/toy1.svg",
      "/toy2.svg",
      "/toy3.svg",
      "/toy4.svg",
      "/toy5.svg",
    ],
  },
  {
    screenBg: "./bg4.svg",
    gameBoardBg: "./gameBoardBg4.svg",
    itemImage: [
      "./flover1.svg",
      "./flover2.svg",
      "./flover3.svg",
      "./flover4.svg",
      "./flover5.svg",
    ],
  },
];
