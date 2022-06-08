export interface Creator {
  fullName: string;
  modified: string;
  thumbnail?: {
    path: string;
    extension: string;
  };
  comics?: {
    available: number;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  series?: {
    available: number;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  stories?: {
    available: number;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
  events?: {
    available: number;
    items: [
      {
        resourceURI: string;
        name: string;
      }
    ];
  };
}
