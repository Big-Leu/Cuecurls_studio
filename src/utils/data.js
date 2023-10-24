import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import {FaClinicMedical} from "react-icons/fa"
import {GiFamilyHouse} from "react-icons/gi"
export const projectExperience = [
  {
    name: "Bathroom Design",
    projects: 76,
    icon: MdBathtub,
    bg: "#286F6C",
  },
  {
    name: "Clinic Design",
    projects: 63,
    icon: FaClinicMedical,
    bg: "#EEC048",
  },
  {
    name: "House Design",
    projects: 47,
    icon: GiFamilyHouse,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "Through our interior design expertise, we help you transform your living or working spaces into stunning and functional environments.",
  " Our focus is on creating personalized, captivating designs that reflect your unique style and enhance your lifestyle.",
];

export const workExp = [
  {
    place: "Romiyo International, Delhi",
    tenure: "July 2023",
    role: "Exibition Stall Design",
    detail:
      "Our exhibition stall design project with Romiyo International was a brilliant collaboration. We're thrilled to have brought their vision to life, creating an engaging and memorable experience for their audience.",
  },
  {
    place: "MR. GOURAV SHARMA",
    tenure: "June 2023",
    role: "Restaurants",
    detail:
      "Designing the Restaurant was a true culinary adventure. We infused every detail with creativity and passion to create a dining experience that's as exceptional as the cuisine. It's been an honor to be part of this project",
  },
  {
    place: "Mr. shidharth",
    tenure: "October 2022",
    role: "Full Home Interior",
    detail:
      "Designing Mr. shidharth's full house interior was a rewarding creative journey. Each room was a canvas where we painted comfort, style, and their unique personality. It's been a pleasure turning their house into a home.",
  },
];

export const comments = [
  {
    name: "DR. RAVI KAUSHIK",
    post: "Clinic Design",
    comment:
      "Working with Cuecurls Studio on the design of our clinic was an exceptional experience. Their team demonstrated an incredible understanding of our vision and needs, and they translated it into a stunning and functional space that has exceeded our expectations. From the initial concept to the final execution, they were highly professional, attentive, and creative. The result is a clinic that not only looks beautiful but also promotes a soothing and welcoming environment for our patients. We couldn't be happier with the outcome, and we highly recommend Cuecurls Studio for any clinic design project",
    img: "./z11.png",
  },
  {
    name: "MR. GULATI",
    post: "Bathroom Design",
    comment:
      "Our collaboration with Cuecurls Studio on our bathroom redesign was nothing short of transformative. They took our outdated, cramped space and turned it into a modern oasis that feels like a spa right at home. The attention to detail and innovative solutions they brought to the project were truly remarkable. From the selection of materials to the layout design, they showcased their expertise in every aspect. The result is a bathroom that's not only visually stunning but also incredibly functional. ",
    img: "./z11.png",
  },
  {
    name: "MR. GOURAV SHARMA",
    post: "Restaurant",
    comment:
      "Our journey with Cuecurls Studio in crafting our restaurant's ambiance has been nothing short of culinary magic. Their ability to translate our culinary concept into a visually stunning and inviting space is nothing short of extraordinary. The attention to detail and their artistic flair are truly remarkable. They've managed to weave the essence of our cuisine into every nook and cranny, creating a dining atmosphere that's unforgettable. Cuecurls Studio's dedication to our vision has made our restaurant a true culinary destination. We can't thank them enough for their unique and brilliant design work",
    img: "./z11.png",
  },
  {
    name: "Romiyo International",
    post: "Exibition Stall Design",
    comment:
      "Cuecurls Studio's exhibition stall design was a showstopper! They took our concept and turned it into an engaging experience that wowed everyone. Their creative touch and innovation made our brand stand out, leaving a lasting impact. Thanks to Cuecurls Studio, our exhibition was a huge success",
    img: "./z11.png",
  },
  {
    name: "Miss. Saloni",
    post: "Dining Area Design",
    comment:
      "Cuecurls Studio's transformation of our dining area was nothing short of a creative masterpiece. They breathed life into our space with a design that's not just visually captivating but also tells a story. From the carefully curated decor to the innovative seating arrangements, it's as if our restaurant now speaks its own language. Cuecurls Studio's ingenuity and flair for the artistic have turned our dining area into a canvas of culinary delight, and we couldn't be more thrilled with the result.",
    img: "./z11.png",
  },
  {
    name: "Mr. shidharth",
    post: "Full Home Interior",
    comment:
      "Cuecurls Studio's full home interior design was a breathtaking masterpiece. They painted our home with creativity, turning every room into a unique canvas of style and comfort. It's not just a house; it's a work of art. Kudos to Cuecurls Studio for making our dream home a living masterpiece!",
    img: "./z11.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
