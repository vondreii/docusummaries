export class Documentary {
  name: string = "Loading...";
  description: string = "Fetching...";
  linkToDoco: string = "";
  producer: string = "Fetching...";
  studio: string = "Fetching...";
  tags: Array<string> = ["Fetching..."];
  topic: string = "Fetching...";

  toString(): string {
    return this.name + " - " +
           this.description + " - " +
           this.producer + " - " +
           this.studio + " - " +
           this.tags + " - " +
           this.topic;
  }
}