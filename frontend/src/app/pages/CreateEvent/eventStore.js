import { signify } from "react-signify";
export const sEvent2 = signify({
  event_name: "",
  description: "",
  event_type_id: 1,
  event_format: "offline",
  start_date: "",
  end_date: "",
  total_tickets: 0,
  available_tickets: 0,
  organizer_name: "",
  organizer_info: "",
  organizer_email: "",
  organizer_phone_number: "",
  account_number: "",
  bank_name: "",
  owner_name: "",
  user_id: "",
  venue_name: "",
  street_name: "",
  ward: "",
  district: "",
  city: "",
  // logo_url: "",
  // cover_image_url: "",

  // start_sell_date: "",
  // end_sell_date: "",
  tickets: [], // { ticket_id:"",ticket_type:"",price:0,}
});
// venue

export const sOrg = signify({});
