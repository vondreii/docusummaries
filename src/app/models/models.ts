export class Documentary {
  name: string = "Loading...";
  description: string = "Fetching...";
  linkToDoco: string = "";
  link: string = "";
  producer: string = "Fetching...";
  studio: string = "Fetching...";
  category: string = "Fetching...";
  categoryObj: Category = new Category();
  tags: Array<string> = ["Fetching..."];
  tagObj: Array<Tag> = new Array<Tag>();
  keywords: Array<string> = ["Fetching..."];
  otherResources: string = "Fetching...";
  content: Array<string> = ["Fetching..."];
}

export class Category {
  id: string = "";
  description: string = "";
  name: string = "";
  link: string = "";
}

export class Tag {
  category: string = "";
  link: string = "";
  name: string = "";
  id: string= "";
  docos: Array<string> = [];
}