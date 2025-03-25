export interface VenueItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    dailyrate: number,
    __v: number,
    id: string
  }
  
  export interface VenueJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: VenueItem[]
  }

  export interface User {
    name: string;
    email: string;
    password: string;
    tel: string;
  }

export interface UserData {
  _id: string,
  name: string,
  email: string,
  role: string,
  created: string,
}

export interface UserDataJson {
  success: boolean;
  data: UserData;
}

export interface Hotel {
    _id: string;
    name: string;
    province: string;
    tel: string;
    id: string;
}

export interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: Hotel[]
}

export interface BookingItem {
    _id: string;
    apptDate: string;  // ISO string format
    user: {
      _id: string,
      name: string,
    };  // User ID reference
    hotel: Hotel;  // Embedded hotel object
    created: string;  // ISO string format
    __v: number;
}

export interface BookingJson {
    success: boolean;
    count: number;
    pagination: Object;
    data: BookingItem[];
}