export class Documentary {
  name: string = "Loading...";
  description: string = "Fetching...";
  linkToDoco: string = "";
  link: string = "";
  producer: string = "Fetching...";
  studio: string = "Fetching...";
  category: string = "Fetching...";
  tags: Array<string> = ["Fetching..."];
  topic: string = "Fetching...";
}

export class Category {
  id: string = "";
  name: string = "";
  link: string = "";
}

export class Tag {
  category: string = "";
  link: string = "";
  name: string = "";
  id: string= "";
}