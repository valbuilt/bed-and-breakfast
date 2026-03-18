export type Review = {
  id: number;
  username: string;
  date: string; 
  rating: number; 
  comment: string;
  created: string; 
  updated: string; 
};

export type Room = {
  id: number;
  name: string;
  location: string;
  bedroom: number;
  bed: number;
  guests: number;
  pricePrNight: number;
  description: string;
  hostName: string;
  hostBio: string;
  img: string[];
  rating: string;
  reviews: Review[];
  map: string;
};
