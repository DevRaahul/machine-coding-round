import { IQuestion } from "./interface";

export const questionList: IQuestion[] = [
  {
    id: 1,
    name: "Memory Sequence Game",
    path: "/sequence_game",
    techStack: ["React", "Javascript", "HTML & CSS"],
    description:
      "This is the memory sequence game where we can click boxes in any order and once all boxes are clicked they will unchecked in same/reverse order depending on our program logic.",
  },
  {
    id: 2,
    name: "Toast Notification Component",
    path: "/toast",
    techStack: ["React", "Javascript", "HTML & CSS"],
    description:
      "In this question we will create our own custom toast notification component. This component will have different varient like 'Success', 'Warning', 'Info' and 'Error'.",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    path: "/tictoc",
    techStack: ["React", "Javascript", "HTML & CSS"],
    description:
      "This is the tic toc game where we can click boxes in any order and once the winning condition is met winner is declared and game is then stops. We can reset the game or undo the recent move.",
  },
  {
    id: 4,
    name: "Custom Progress Bar",
    path: "/progress",
    techStack: ["React", "Javascript", "HTML & CSS"],
    description:
      "This is the custom component created for progress bar. Progress bar can be used to show the on going progress of any data fetching action.",
  },
  {
    id: 5,
    name: "File Manager",
    path: "/explorer",
    techStack: ["React", "Javascript", "HTML & CSS"],
    description:
      "This is the file explorer component created to show custom file structure. We have used dummy response to mimic the folder structure response.",
  },
];
