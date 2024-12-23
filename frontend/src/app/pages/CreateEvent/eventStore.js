import { signify } from "react-signify";
export const sEvent2 = signify({
  event_id: "",
  logo_url: "",
  cover_image_url: "",
  event_name: "",
  event_type_id: 1,
  event_format: "offline",
  venue_name: "",
  city: "",
  district: "",
  ward: "",
  street_name: "",
  organizer_name: "",
  organizer_info: "",
  organizer_logo: "",
  description: "",
  start_date: "",
  end_date: "",
  start_sell_date: "",
  end_sell_date: "",
  tickets: [], // { ticket_id:"",ticket_type:"",price:0,total:0, remain:0, start_time:"",end_time:""}
});
