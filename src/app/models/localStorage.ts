import { Category, Documentary, Tag } from "./models";

// Local storage for offline development and debugging only
// Change Offline in src/app/models/global.ts to 'true'
export const LocalCategories: Category[] =  [ 
  {id: "id-disasters", description: "Documentaries involving major disruptions to society, including natural disasters, man-made disasters, and events resulting in multiple fatalities or injuries.", name: "Disasters", link: "disasters" },
  {id: "id-lifestyle", description: "Lifestyle documentaries about ways of living, including alternative ways of living and how people used to live in the past.", name: "Lifestyle", link: "lifestyle" },
  {id: "id-health", description: "Documentaries related to overall health, fitness, and physical illnesses and diseases.", name: "Health", link: "health" } 
];
export const LocalTags: Tag[] =  [ 
  {id: "id-aircrash", name: "Aircrash", category: "id-disasters", link: "disasters/aircrash", docos: [] },
  {id: "id-explosionsOrFire", name: "Explosions Or Fire", category: "id-disasters", link: "disasters/explosionsOrFire", docos: [] },
  {id: "id-household", name: "Household", category: "id-lifestyle", link: "lifestyle/household", docos: [] },
  {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise", docos: [] },
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
    categoryObj: {id: "id-disasters", description: "a", name: "Disasters", link: "disasters" }, 
    tags: ["id-aircrash", "id-explosionsOrFire"],
    tagObj: [
      {id: "id-aircrash", name: "Aircrash", category: "id-disasters", link: "disasters/aircrash", docos: [] },
      {id: "id-explosionsOrFire", name: "Explosions Or Fire", category: "id-disasters", link: "disasters/explosionsOrFire", docos: [] }
    ],
    keywords: ["", ""],
    otherResources: "wikiLink",
    content: ["content"]
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
    categoryObj: {id: "id-lifestyle", description: "b", name: "Lifestyle", link: "lifestyle" },
    tags: ["id-household"],
    tagObj: [
      {id: "id-household", name: "Household", category: "id-lifestyle", link: "lifestyle/household", docos: [] }
    ],
    keywords: ["", ""],
    otherResources: "wikiLink",
    content: ["content"]
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
    categoryObj: {id: "id-health", description: "c", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise", docos: [] }
    ],
    keywords: ["", ""],
    otherResources: "wikiLink",
    content: ["content"]
  },
  {
    name: "1000 lb Sisters",
    description: "1000 lb Sisters - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/1000lbSistersTippinTheScalesS02E02",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-health", 
    categoryObj: {id: "id-health", description: "c", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise", docos: [] }
    ],
    keywords: ["", ""],
    otherResources: "wikiLink",
    content: ["content"]
  },
  {
    name: "Obesity In Texas",
    description: "Obesity In Texas - local storage",
    linkToDoco: "http://www.google.com",
    link: "/disasters/article/obesityInTexas",
    producer: "Who knows",
    studio: "Who cares",
    category: "id-health", 
    categoryObj: {id: "id-health", description: "c", name: "Health", link: "health" },
    tags: ["id-dietAndExercise"],
    tagObj: [
      {id: "id-dietAndExercise", name: "Diet And Exercise", category: "id-health", link: "health/dietAndExercise", docos: [] }
    ],
    keywords: ["", ""],
    otherResources: "wikiLink",
    content: ["content"]
  }
]