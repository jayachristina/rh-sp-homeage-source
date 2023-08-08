export class Pattern {

    id: string;
    displayOrder: number;
   title: string;
   description: string;
   readmore: string;
   tags: Array<string>;
   supportability: string;
   industry: string;
   patternType: string;
   additionalLinks: Array<string>;

  constructor(id: string,
    displayOrder: number,
     title: string,
     description: string,
     readmore: string,
     tags: Array<string>,
     supportability: string,
     industry: string,
     patternType: string,
     additionalLinks: Array<string>) {

      this.id = id;
      this.displayOrder = displayOrder;
      this.title = title;
      this.description =  description;
      this.readmore = readmore;
      this.tags = tags;
      this.supportability = supportability;
      this.industry = industry;
      this.patternType=patternType;
      this.additionalLinks = additionalLinks;

  }


}
