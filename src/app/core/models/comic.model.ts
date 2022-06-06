export interface Comic {
  title: string;
  description?: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  price: string;
  creators: {
    items: {
      name: string;
      role: string;
    };
  };
  characters: {
    items: {
      resourceURI: string;
      name: string;
    };
  };
}
