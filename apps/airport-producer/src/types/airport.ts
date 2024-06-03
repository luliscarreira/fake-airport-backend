type Geolocation = {
  latitude: string;
  longitude: string;
};

export type Airport = {
  uniqueCode: string;
  geolocation: Geolocation;
  planesToDeparture: string[];
  passengersQuantity: number;
};
