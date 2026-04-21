export type Review = {
  id: number;
  username: string;
  userAvatar: string;
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
  hostAvatar: string;
  hostBio: string;
  img: string[];
  rating: string;
  reviews: Review[];
  map: string;
};

export type Booking = {
  id: number;
  userId: number;
  roomId: number;
  fromDate: string;
  toDate: string;
  message: string;
}

export type NewBooking = Omit<Booking, "id">;
