import _ from 'lodash'

const data = [
  {
    name: "Fire-Water" ,
    type: "Downhill",
    brand: "Sector 9",
    price: "180",
    imageSrc: "/images/downhill1.png"
  },
  {
    name: "Wavey Sunset",
    type: "Downhill",
    brand: "Sector 9",
    price: "170",
    imageSrc: "/images/downhill2.png"
  },
  {
    name: "Nelly's",
    type: "Downhill",
    brand: "Arbor",
    price: "220",
    imageSrc: "/images/downhill3.png"
  },
  {
    name: "Rasta Love",
    type: "Downhill",
    brand: "Arbor",
    price: "170",
    imageSrc: "/images/downhill4.png"
  },
  {
    name: "EyeBall",
    type: "Fishtail",
    brand: "Sector 9",
    price: "160",
    imageSrc: "/images/fishtail1.png"
  },
  {
    name: "Lollipop",
    type: "Fishtail",
    brand: "Naked",
    price: "130",
    imageSrc: "/images/fishtail2.png"
  },
  {
    name: "Mandala",
    type: "Fishtail",
    brand: "Sector 9",
    price: "150",
    imageSrc: "/images/fishtail3.png"
  },
  {
    name: "Fish and Crabs",
    type: "Fishtail",
    brand: "Madrid",
    price: "160",
    imageSrc: "/images/fishtail4.png"
  },
  {
    name: "California Love",
    type: "Pintail",
    brand: "Sector 9",
    price: "180",
    imageSrc: "/images/pintail1.png"
  },
  {
    name: "Bob Marley",
    type: "Pintail",
    brand: "Sector 9",
    price: "170",
    imageSrc: "/images/pintail2.png"
  },
  {
    name: "Fujifilm Instax",
    type: "Pintail",
    brand: "Roxy",
    price: "160",
    imageSrc: "/images/pintail3.png"
  },
  {
    name: "Oceanology",
    type: "Pintail",
    brand: "Arbor",
    price: "230",
    imageSrc: "/images/pintail4.png"
  }
];


const brands = ["Sector 9", "Arbor", "Roxy", "Madrid", "Naked"];
const types = ["Downhill", "Pintail", "Fishtail"];

const products = _.shuffle(data);

export {
  products,
  brands,
  types
}
