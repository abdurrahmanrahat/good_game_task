export type TRating = {
  average: number;
  reviews: number;
};

export type TProduct = {
  price: string;
  name: string;
  rating: TRating;
  image: string;
  id: number;
};
