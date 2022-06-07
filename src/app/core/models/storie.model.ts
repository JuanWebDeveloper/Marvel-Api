export interface Storie {
  title: string;
  description?: string;
  modified: string;
  creators?: {
    items: [
      {
        name: string;
        role: string;
        resourceURI: string;
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
