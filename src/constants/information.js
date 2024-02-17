import images from "../images";
let { facebook, instagram } = images;

export const SOCIALS = {
  instagram: instagram,
  facebook: facebook,
};

export const CONTACT_INFO = {
  address: "Katarina Bangata 21",
  postCode: "116 39 Stockholm",
  phone: "+46 864 450 43",
};

export const OPEN_HOURS = {
  mondayToWednesday: "Mån-Ons: 9-19",
  thursday: "Tors: 9-21",
  friday: "Fre: 9-19",
  weekend: "Lör-Sön: 10-17:30",
};

export const CONTACT_DETAILS = {
  address: `${CONTACT_INFO.address} <br /> ${CONTACT_INFO.postCode}`,
  phone: CONTACT_INFO.phone,
  socialLinks: [
    {
      href: "https://www.facebook.com/cafeblalotusstockholm",
      img: SOCIALS.facebook,
      alt: "Facebook logo",
    },
    {
      href: "https://www.instagram.com/cafeblalotus/?hl=en",
      img: SOCIALS.instagram,
      alt: "Instagram logo",
    },
  ],
};

export const googleMapsLink =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.2532463362224!2d18.074458116093847!3d59.312028081652755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77f74ad3e621%3A0xb1bddf97161a4a39!2sCafe+Bl%C3%A5+Lotus!5e0!3m2!1sen!2sse!4v1523131257345";
