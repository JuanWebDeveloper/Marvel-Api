import { Injectable } from '@angular/core';

import { Creator } from '../models/creator.model';

@Injectable({
  providedIn: 'root',
})
export class ApiToCreatorsMapper {
  //? Mapping of the data brought by the getCreator service.
  public mapCreator(apiCreator: any): Creator {
    const result = apiCreator.data.results[0];

    const creator: Creator = {
      fullName: result.fullName,
      modified: result.modified,
      thumbnail: {
        path: result.thumbnail.path,
        extension: result.thumbnail.extension,
      },
      comics: {
        available: result.comics.available,
        items: result.comics.items.map((comic: any) => {
          return {
            resourceURI: comic.resourceURI,
            name: comic.name,
          };
        }),
      },
      series: {
        available: result.series.available,
        items: result.series.items.map((serie: any) => {
          return {
            resourceURI: serie.resourceURI,
            name: serie.name,
          };
        }),
      },
      stories: {
        available: result.stories.available,
        items: result.stories.items.map((story: any) => {
          return {
            resourceURI: story.resourceURI,
            name: story.name,
          };
        }),
      },
      events: {
        available: result.events.available,
        items: result.events.items.map((event: any) => {
          return {
            resourceURI: event.resourceURI,
            name: event.name,
          };
        }),
      },
    };

    return creator;
  }
}
