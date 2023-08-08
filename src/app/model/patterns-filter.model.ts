export class PatternsFilter {
    patternType: Array<string>;
    title: string;
    description: string;
    tags: Array<string>;
    supportability: Array<string>;
    industry: Array<string>;

    constructor(
       title: string,
       description: string,
       tags: Array<string>,
       supportability: Array<string>,
       industry: Array<string>,
       patternType: Array<string>) {

        this.title = title;
        this.description =  description;
        this.tags = tags;
        this.supportability = supportability;
        this.industry = industry;
        this.patternType=patternType;


    }

}
