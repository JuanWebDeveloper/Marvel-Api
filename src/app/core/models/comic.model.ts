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
      resourceURI: string;
    };
  };
  characters: {
    items: {
      resourceURI: string;
      name: string;
    };
  };
  events?: {
    items: {
      resourceURI: string;
      name: string;
    };
  };
  stories?: {
    items: {
      resourceURI: string;
      name: string;
    };
  };
  series?: {
    resourceURI: string;
    name: string;
  };
}
