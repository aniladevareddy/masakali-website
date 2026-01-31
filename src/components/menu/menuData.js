import masalaPapad from "../../assets/img/masala-papad.png";
import onionPakora from "../../assets/img/onion-pakora.png";
import alooSamosa from "../../assets/img/aloo-samosa.png";
import alooTikki from "../../assets/img/aloo-tikki.png";
import glutenIcon from "../../assets/img/gluten.png";

export const appetizers = [
  {
    title: "Masala Papad with Chutneys",
    price: 9,
    desc: "Crisp papadum topped with a colorful medley of finely chopped onions, tomatoes, and green chilies, seasoned with chaat masala and fresh cilantro, served with sweet tamarind and mint chutneys",
    img: masalaPapad,
    icon: glutenIcon,
  },
  {
    title: "Onion Pakora with Chutneys",
    price: 12,
    desc: "Crispy onion fritters, delicately spiced and served with chutneys.",
    img: onionPakora,
  },
  {
    title: "Aloo Samosa with Chana Curry",
    price: 12,
    desc: "Golden potato patties with savory white peas curry.",
    img: alooSamosa,
  },
  {
    title: "Aloo Tikki with Chana Curry",
    price: 12,
    desc: "Lightly spiced potato patties blended with peas.",
    img: alooTikki,
    icon: glutenIcon,
  },
];

export const mains = [
  { title: "Butter Chicken", price: 18, desc: "Creamy tomato-based curry with tender chicken pieces.", img: masalaPapad },
  { title: "Lamb Rogan Josh", price: 19, desc: "Aromatic lamb curry slow-cooked in rich spices.", img: onionPakora }
];

export const sides = [
  { title: "Naan", price: 3, desc: "Soft leavened bread baked in a tandoor.", img: alooSamosa },
  { title: "Raita", price: 4, desc: "Yoghurt-based side with cucumber and spices.", img: alooTikki }
];

export const veganAppetizers = [
  { title: "Vegan Samosa", price: 7, desc: "Crispy pastry filled with spiced potatoes and peas.", img: alooSamosa }
];

export const veganHakka = [
  { title: "Hakka Noodles", price: 10, desc: "Stir-fried noodles with fresh vegetables and soy.", img: onionPakora }
];

export const veganCurries = [
  { title: "Chana Masala", price: 11, desc: "Chickpea curry simmered in a tangy tomato sauce.", img: masalaPapad }
];

export const veganRice = [
  { title: "Jeera Rice", price: 6, desc: "Fragrant basmati rice with roasted cumin.", img: alooTikki }
];
