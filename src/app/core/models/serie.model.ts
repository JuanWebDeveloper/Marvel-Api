export interface Serie {
  title: string;
  description?: string;
  startYear: number;
  endYear?: number;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  creators: {
    items: [
      {
        name: string;
        role: string;
      }
    ];
  };
  characters: {
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
  };
  comics?: {
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
  };
  stories?: {
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
  };
  events?: {
    items: [
      {
        name: string;
        resourceURI: string;
      }
    ];
  };
}
