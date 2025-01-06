import { Item } from "@/types/item";

const image =
  "https://images.unsplash.com/photo-1579547944064-0180251f94c8?q=80&w=2139&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const examples: Item[] = [
  {
    name: "Music",
    route: "/(examples)",
    description: "Music example",
    image,
  },
  {
    name: "Auth",
    route: "/(examples)/auth",
    description: "Auth example",
    image,
  },
];
