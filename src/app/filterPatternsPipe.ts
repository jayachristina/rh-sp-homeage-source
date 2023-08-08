import { Pipe, PipeTransform } from '@angular/core';
import { PatternsFilter } from './model/patterns-filter.model';

import { Pattern } from './model/patterns.model';

@Pipe({ name: 'filterPatternsPipe' })
export class PatternsTypePipe implements PipeTransform {
  transform(patternsList: Pattern[], patternsFilter:PatternsFilter) {
    return patternsList.filter(pattern =>
      {
        pattern.patternType == patternsFilter.patternType[0] || pattern.patternType == patternsFilter.patternType[1] || pattern.patternType == patternsFilter.patternType[2]
      }

      );
  }
}
