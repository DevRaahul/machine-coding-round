import { IQuestion } from "./interface";

export const questionList: IQuestion[] = [
  {
    id: 1,
    name: "Memory Sequence Game",
    path: "/sequence_game",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "This is the memory sequence game where we can click boxes in any order and once all boxes are clicked they will unchecked in same/reverse order depending on our program logic.",
  },
  {
    id: 2,
    name: "Toast Notification Component",
    path: "/toast",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "In this question we will create our own custom toast notification component. This component will have different varient like 'Success', 'Warning', 'Info' and 'Error'.",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    path: "/tictoc",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "This is the tic toc game where we can click boxes in any order and once the winning condition is met winner is declared and game is then stops. We can reset the game or undo the recent move.",
  },
  {
    id: 4,
    name: "Custom Progress Bar",
    path: "/progress",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "This is the custom component created for progress bar. Progress bar can be used to show the on going progress of any data fetching action.",
  },
  {
    id: 5,
    name: "File Manager",
    path: "/explorer",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "This is the file explorer component created to show custom file structure. We have used dummy response to mimic the folder structure response.",
  },
  {
    id: 6,
    name: "Modal Component",
    path: "/modal",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description: "This is the Modal component created to show custom Modals. It has functionality to show/close modal with given  information.",
  },
  {
    id: 7,
    name: "FAQ Component",
    path: "/freqAsked",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description: "This is the FAQ component created to show FAQ sections. We have used basic HTML structure to show FAQ sections.",
  },
  {
    id: 8,
    name: "Nested Commennts",
    path: "/comments",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description:
      "This is the Nested comments component created to show multiple comments. We have used basic HTML structure to show comments sections.",
  },
  {
    id: 9,
    name: "To-Do List",
    path: "/toDo",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description: "This is the basic todo app. We can multiple todo items and changes status of each item.",
  },
  {
    id: 10,
    name: "Autocomplete Component",
    path: "/autocomplete",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description: "This is the basic autocomplet component. We can search any data like countries/cities and select the value",
  },
  {
    id: 11,
    name: "Timer app",
    path: "/stopwatch",
    techStack: ["React", "Typescript", "HTML & CSS"],
    description: "This is the basic Timer app. We have implemented features of stopwatch and timer in this app.",
  },
];
