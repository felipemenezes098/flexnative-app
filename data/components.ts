type Component = {
  name: string;
  description: string;
  image: string;
  route: string;
};

const allImage =
  "https://images.unsplash.com/photo-1589810264340-0ce27bfbf751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyYWRpZW50fGVufDB8fDB8fHww";

const image =
  "https://images.unsplash.com/photo-1557683304-673a23048d34?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const components: Component[] = [
  {
    name: "All",
    description: "See all components",
    route: "/(components)/",
    image: allImage,
  },
  {
    name: "Accordion",
    description: "Accordion component",
    route: "/(components)/accordion",
    image,
  },
  {
    name: "Button",
    description: "Button component",
    route: "/(components)/button",
    image,
  },
  {
    name: "Card",
    description: "Card component",
    route: "/(components)/card",
    image,
  },
  {
    name: "Collapsible",
    description: "Collapsible component",
    route: "/(components)/collapsible",
    image,
  },
  {
    name: "Form",
    description: "Form component",
    route: "/(components)/form",
    image,
  },
  {
    name: "Tabs",
    description: "Tabs component",
    route: "/(components)/tabs",
    image,
  },
  {
    name: "TextInput",
    description: "TextInput component",
    route: "/(components)/text-input",
    image,
  },
];
