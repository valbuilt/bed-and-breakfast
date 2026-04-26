export type User = {
  id: number;
  userName: string;
  password: string;
  email: string;
};

export type Review = {
  id: number;
  username: string;
  userAvatar: string;
  date: string;
  comment: string;
};

export type Room = {
  id: number;
  name: string;
  location: string;
  locationShort: string;
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
  img: string;
  name: string;
  locationShort: string;
  fromDate: string;
  toDate: string;
  message: string;
};

export type NewBooking = Omit<Booking, "id">;

export type NewMessage = {
  message: string;
};