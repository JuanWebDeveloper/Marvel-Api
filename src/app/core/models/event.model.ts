export interface Event {
  title: string;
  description?: string;
  modified?: string;
  start?: string;
  end?: string;
  thumbnail?: {
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
  series?: {
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
}
