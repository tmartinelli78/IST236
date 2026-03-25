import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRIES = [
    //MAKE FLAG COLORS?
  new Country("c1", "Italy", "#008c45"), // Red
  new Country("c2", "Spain", "#AA151b"), // Blue
  new Country("c3", "France", "#00209f"), // Green
  new Country("c4", "Japan", "#bc002d"), // Orange
  new Country("c5", "Mexico", "#006847"), // Purple
  new Country("c6", "Greece", "#005BAE"), // Yellow
  new Country("c7", "Thailand", "#ed1c24"), // Light Blue
  new Country("c8", "Canada", "#ff0000"), // Light Green
  new Country("c9", "Australia", "#00008b"), // Deep Orange
  new Country("c10", "New Zealand", "#00247d"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "d1",
    "c1",
    "Rome",
    "2,500",
    "753 BC",
    4.8,
    "https://res.cloudinary.com/picolo/image/fetch/f_webp,q_90,w_1600/https://res.cloudinary.com/picolo/image/upload/v1669217815/Picolo/City/Rome/First%2520time%2520in%2520Rome/Italy_Rome_Saint-Peters-Square_Travel_Picolo_Skyline_View.jpg"
  ),
  new Destination(
    "d2",
    "c2",
    "Barcelona",
    "1500",
    "230 BC",
    4.7,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/3b/2b/bd/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_b88493a7b5839ec4d5b8"
  ),
  new Destination(
    "d3",
    "c3",
    "Paris",
    "1600",
    "3rd Century BC",
    4.6,
    "https://artfulliving.com/wp-content/uploads/2023/12/PARIS_FEAT_Photography-by-Mlenny.png"
  ),
  new Destination(
    "d4",
    "c4",
    "Tokyo",
    "1800",
    "Founded in 1457 as Edo before being renamed Tokyo in 1868",
    4.9,
    "https://www.advantour.com/img/japan/images/tokyo.jpg"
  ),
  new Destination(
    "d5",
    "c5",
    "Cancun",
    "1500",
    "1970",
    4.5,
    "https://www.barcelo.com/guia-turismo/wp-content/uploads/2024/09/ok-cancun.jpg"
  ),
  new Destination(
    "d6",
    "c6",
    "Athens",
    "1400",
    "3000 Bc",
    4.7,
    "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg"
  ),
  new Destination(
    "d7",
    "c7",
    "Bangkok",
    "1300",
    "1782",
    4.7,
    "https://cdn.sanity.io/images/nxpteyfv/goguides/8c815f3830cc477e05e79c8b84e3258d25f602c5-1600x1066.jpg"
  ),
  new Destination(
    "d8",
    "c8",
    "Vancouver",
    "2100",
    "1886",
    4.6,
    "https://ca-times.brightspotcdn.com/dims4/default/b0bec06/2147483647/strip/true/crop/4800x2520+0+347/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F6c%2F3d%2F732446534aa2bd5b0c2e4cab0e04%2Fvancouver-dusk.jpeg"
  ),
  new Destination(
    "d9",
    "c9",
    "Sydney",
    "2800",
    "1788",
    4.7,
    "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Sydney-2.jpg"
  ),
  new Destination(
    "d10",
    "c10",
    "Queenstown",
    "2500",
    "1860",
    4.9,
    "https://www.tripsavvy.com/thmb/3rY7N2U9ndGKVpbOP_jTp27Gb2E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Qstown-ee2e9a8a78f34ccb8f3599fe286e45f9.jpg"
  ),
  new Destination(
    "d11",
    "c1",
    "The Dolomites",
    "2500",
    "Formed 250 million years ago",
    4.8,
    "https://www.thesmartroute.com/wp-content/uploads/2023/08/PXL_20230803_124146672-scaled.jpg"
  ),
  new Destination(
    "d12",
    "c2",
    "Seville",
    "1700",
    "8th Century BC",
    4.7,
    "https://cdn.audleytravel.com/1050/749/79/1342694-plaza-de-espaa-seville.webp"
  ),
  new Destination(
    "d13",
    "c3",
    "Savoie",
    "2400",
    "11th Century",
    4.7,
    "https://cdn.sanity.io/images/nxpteyfv/goguides/6eed15b6e39ee2b586bdd7c6da46bb70520f8ac6-1600x1066.jpg"
  ),
  new Destination(
    "d14",
    "c4",
    "Okinawa",
    "2200",
    "1429",
    4.8,
    "https://www.backpackeninazie.nl/wp-content/uploads/2023/06/naha-main.webp"
  ),
  new Destination(
    "d15",
    "c5",
    "San Miguel de Allende",
    "1400",
    "1512",
    4.5,
    "https://lh3.googleusercontent.com/p/AF1QipNy_bOjBzIttqJX-T_sTC6_ezMe4hmE1K1myOwG=s1360-w1360-h1020"
  ),
  new Destination(
    "d16",
    "c6",
    "Crete",
    "1800",
    "6500-7000 BC",
    4.7,
    "https://lh3.googleusercontent.com/p/AF1QipOk70Jg5ROVIeFFkWUcLEI1aWtuQWlz3-sna6dQ=s1360-w1360-h1020"
  ),
  new Destination(
    "d17",
    "c7",
    "Phuket",
    "1600",
    "1st Century BC",
    3.8,
    "https://cdn.sanity.io/images/nxpteyfv/goguides/8c815f3830cc477e05e79c8b84e3258d25f602c5-1600x1066.jpg"
  ),
  new Destination(
    "d18",
    "c8",
    "Banff National Park",
    "2300",
    "1885",
    4.9,
    "https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg"
  ),
  new Destination(
    "d19",
    "c9",
    "Great Barrier Reef",
    "3200",
    "Discovered in 1770",
    4.5,
    "https://cdn.britannica.com/64/155864-050-34FBD7A2/view-Great-Barrier-Reef-Australia-coast.jpg"
  ),
  new Destination(
    "d20",
    "c10",
    "Milford Sound",
    "2800",
    "Settled by Maori people over 1000 years ago, discovered by Europeans in 1812",
    4.6,
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/Milford_Sound_%28New_Zealand%29.JPG"
  ),
];
