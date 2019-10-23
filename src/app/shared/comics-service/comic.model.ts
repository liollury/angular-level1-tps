export class ComicImageModel {
  iconUrl: string;
  mediumUrl: string;
  thumbUrl: string;
}

export class ComicModel {
  public id: number;
  public name: string;
  public aliases: Array<string>;
  public apiDetailUrl: string;
  public dateAdded: Date;
  public dateLastUpdate: Date;
  public description: string;
  public image: ComicImageModel;
}
