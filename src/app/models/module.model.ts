export class ModuleList {
    modules: Module[] = new Array;

}

export class Module {
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
}

