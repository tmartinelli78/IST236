import ArtStyle from '../models/artstyle';
import Art from '../models/art';

export const ART_STYLES = [
new ArtStyle('s1', 'Renaissance', '#5a0000'),
  new ArtStyle('s2', 'Impressionism', '#c5a059'),
  new ArtStyle('s3', 'Surrealism', '#2c3e50'),
  new ArtStyle('s4', 'Baroque', '#8b0000'),
  new ArtStyle('s5', 'Contemporary', '#4a4a4b'),
  new ArtStyle('s6', 'Gothic Art', '#1a1a1b'),
  new ArtStyle('s7', 'Modern Art', '#d4af37'),
  new ArtStyle('s8', 'Neoclassicism', '#7b5e57'),
  new ArtStyle('s9', 'Romanticism', '#5d4037'),
  new ArtStyle('s10', 'Street Art', '#8b0000'),
  new ArtStyle('s11', 'Primitive', '#4a3708'),
  new ArtStyle('s12', 'Photorealism', '#34495e'),
];

//todo add more art style examples !
export const ARTWORKS = [
  new Art(
    'a1', ['s1'], 'Mona Lisa', 'Leonardo da Vinci', '1503', 
    'Oil on Poplar', 'The most famous smile in history.', 
    'https://wikimedia.org'
  ),
  new Art(
    'a2', ['s2'], 'Starry Night', 'Vincent van Gogh', '1889', 
    'Oil on Canvas', 'A view from the asylum.', 
    'https://wikimedia.org'
  )
];
