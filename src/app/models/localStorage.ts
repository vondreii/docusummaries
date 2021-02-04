import { Category, Documentary, Tag } from "./models";

// Local storage for offline development and debugging only
// Change Offline in src/app/models/global.ts to 'true'
export const LocalCategories: Category[] =  [ 
  {id: "id-disasters", name: "Disasters", link: "disasters" },
  {id: "id-lifestyle", name: "Lifestyle", link: "lifestyle" },
  {id: "id-health", name: "Health", link: "health" } 
];
export const LocalTags: Tag[] =  [ 
  {id: "id-aircrash", name: "Aircrash", category: "id-disasters", link: "disasters/aircrash" },
  {id: "id-explosionsOrFire", name: "Explosions Or Fire", category: "id-disasters", link: "disasters/explosionsOrFire" },
  {id: "id-household", name: "Household", category: "id-lifestyle", link: "lifestyle/household" },
  {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise" },
];
export const LocalDocos: Documentary[] = [
  // Disasters => Aircrash & Explosions Or Fire 
  {
    name: "Surviving Lockerbie",
    description: "Surviving Lockerbie - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/survivingLockerbie",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-disasters", 
    categoryObj: {id: "id-disasters", name: "Disasters", link: "disasters" }, 
    tags: ["id-aircrash", "id-explosionsOrFire"],
    tagObj: [
      {id: "id-aircrash", name: "Aircrash", category: "id-disasters", link: "disasters/aircrash" },
      {id: "id-explosionsOrFire", name: "Explosions Or Fire", category: "id-disasters", link: "disasters/explosionsOrFire" }
    ],
    topic: ""
  },
  // Lifestyle => Household
  {
    name: "Hoarders",
    description: "Hoarders - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/hoarders",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-lifestyle", 
    categoryObj: {id: "id-lifestyle", name: "Lifestyle", link: "lifestyle" },
    tags: ["id-household"],
    tagObj: [
      {id: "id-household", name: "Household", category: "id-lifestyle", link: "lifestyle/household" }
    ],
    topic: ""
  },
  // Health => Diet # Exercise
  {
    name: "Supersize Me",
    description: "Supersize Me - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/supersizeMe",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-health", 
    categoryObj: {id: "id-health", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise" }
    ],
    topic: ""
  },
  {
    name: "1000 lb Sisters",
    description: "1000 lb Sisters - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/1000lbSistersTippinTheScalesS02E02",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-health", 
    categoryObj: {id: "id-health", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise" }
    ],
    topic: ""
  },
  {
    name: "Obesity In Texas",
    description: "Obesity In Texas - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/obesityInTexas",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-health", 
    categoryObj: {id: "id-health", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise" }
    ],
    topic: ""
  }
]