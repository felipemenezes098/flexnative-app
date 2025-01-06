import { Item } from "@/types/item";

const image =
  "https://images.unsplash.com/photo-1604342427523-189b17048839?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const layouts: Item[] = [
  { name: "Root", route: "/(layouts)/root", description: "Root layout", image },
  {
    name: "Nested",
    route: "/(layouts)/nested",
    description: "Nested layout",
    image,
  },
];
