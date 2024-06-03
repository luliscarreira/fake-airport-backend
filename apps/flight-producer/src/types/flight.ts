type Geolocation = {
  latitude: string;
  longitude: string;
};

export type Flight = {
  airplaneModel: string;
  origin: string;
  destination: string;
  passengersQuantity: number;
  departureDate: Date;
  arrivalEstimate: Date;
  arrialDate: Date;
  geolocation: Geolocation;
};
