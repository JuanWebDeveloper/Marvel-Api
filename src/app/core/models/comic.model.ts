export interface Comic {
  title: string;
  description?: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: {
      name: string;
    };
  };
  characters: {
    items: {
      resourceURI: string;
      name: string;
    };
  };
}
