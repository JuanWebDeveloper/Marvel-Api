export interface Storie {
  title: string;
  description?: string;
  modified: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  creators?: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  characters?: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  series?: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  comics?: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  events?: {
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
}
