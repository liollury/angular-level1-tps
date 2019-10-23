export class ComicImageModel {
  originalUrl: string;
}

export class ComicModel {
  public id: number;
  public name: string;
  public aliases: Array<string>;
  public apiDetailUrl: string;
  public startYear: number;
  public description: string;
  public image: ComicImageModel;
}
