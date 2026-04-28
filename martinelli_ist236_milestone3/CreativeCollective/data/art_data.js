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

export const ARTWORKS = [
  new Art(
    'a1', ['s1'], 'Mona Lisa', 'Leonardo da Vinci', '1503', 
    'Oil on Poplar', 'The most famous smile in history.', 
    'https://uploads5.wikiart.org/00475/images/leonardo-da-vinci/0000136308-og.JPG!Large.JPG'
  ),
  new Art(
    'a5', ['s1'], 'The School of Athens', 'Raphael', '1511', 
    'Fresco', 'A masterpiece representing Philosophy and the greatest minds of antiquity.', 
    'https://cdn.britannica.com/44/22944-050-20DB2F82/Plato-Aristotle-philosophers-detail-Raphael-School-of.jpg'
  ),
  new Art(
    'a2', ['s2'], 'Starry Night', 'Vincent van Gogh', '1889', 
    'Oil on Canvas', 'A view from the asylum.', 
    'https://sanctuarymentalhealth.org/wp-content/uploads/2021/03/The-Starry-Night-1200x630-1.jpg'
  ),
  new Art(
    'a6', ['s2'], 'Sunrise', 'Claude Monet', '1872', 
    'Oil on Canvas', 'The painting that gave the Impressionist movement its name, depicting the port of Le Havre.', 
    'https://www.claude-monet.com/assets/img/paintings/impression-sunrise.jpg'
  ),
  new Art(
    'a3', ['s3'], 'In The Third Sleep', 'Kay Sage', '1944', 
    'Oil on Canvas', 'A field of cracked earth with mast-like forms casting long shadows.', 
    'https://www.artnews.com/wp-content/uploads/2024/08/ART596514.jpeg?w=800'
  ),
  new Art(
    'a7', ['s3'], 'The Persistence of Memory', 'Salvador Dalí', '1931', 
    'Oil on Canvas', 'Famous for its melting clocks, depicting the fluid nature of time.', 
    'https://www.moma.org/media/W1siZiIsIjYxOTY1OSJdLFsicCIsImNvbnZlcnQiLCItcXVhbGl0eSA5MCAtcmVzaXplIDIwMDB4MjAwMFx1MDAzZSJdXQ.jpg?sha=ef9155183ab6bba1'
  ),
  new Art(
    'a4', ['s4'], 'Portrait of Innocent X', 'Diego Velázquez', '1650', 
    'Oil on Canvas', 'A highly realistic commissioned portrait of the Pope.', 
    'https://mymodernmet.com/wp/wp-content/uploads/2022/05/velazquez-pope-innocent-x-portrait-9.jpg'
  ),
  new Art(
    'a8', ['s4'], 'The Night Watch', 'Rembrandt', '1642', 
    'Oil on Canvas', 'Famous for its use of light and shadow (chiaroscuro).', 
    'https://ychef.files.bbci.co.uk/624x351/p070wbmx.jpg'
  ),
  new Art(
    'a9', ['s5'], 'Balloon Dog (Blue)', 'Jeff Koons', '1994', 
    'Mirror-polished Stainless Steel', 'A monumental sculpture that mimics a twisted balloon.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQnZyci-BiBytqMyNRf910nlXb3wf4Vu9SA&s'
  ),
  new Art(
    'a10', ['s5'], 'Gasthof zur Muldentalsperre', 'Peter Doig', '2000', 
    'Oil on Canvas', 'A haunting, cinematic landscape that blends memory and reality with a dreamlike glow.', 
    'https://www.artic.edu/iiif/2/153493fa-8cc8-4126-f790-0a796bdf84de/full/843,/0/default.jpg'
  ),
new Art(
  'a11', ['s6'], 'The Ghent Altarpiece', 'Jan van Eyck', '1432', 
  'Oil on Panel', 'A 15th-century masterpiece defining the transition from Gothic to Renaissance, famous for its luminous oil glazes.', 
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMYCZ1PlSrcIDKSPNBGg5mUa_KLQYo_Ts_w&s'
),
new Art(
  'a12', ['s6'], 'The Descent from the Cross', 'Rogier van der Weyden', '1435', 
  'Oil on Oak Panel', 'A pinnacle of 15th-century Gothic drama, known for its emotional intensity and sculptural figure arrangements.', 
  'https://cdn.britannica.com/84/263484-050-B38A9547/the-descent-form-the-cross-by-rogier-van-der-weyden-1443.jpg'
),
  new Art(
    'a13', ['s7'], 'Composition VII', 'Wassily Kandinsky', '1913', 
    'Oil on Canvas', 'One of the most important works of early abstract art.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoNbgwZHddTCO-fxD9cOETl6R-fkIpBcf8ww&s'
  ),
  new Art(
    'a14', ['s7'], 'The Kiss', 'Gustav Klimt', '1907', 
    'Oil and Gold Leaf on Canvas', 'A Golden Phase masterpiece depicting an intimate embrace.', 
    'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/1122102/1380833/api1cx07i__83955.1626946998.jpg?c=2'
  ),
  new Art(
    'a15', ['s8'], 'The Death of Marat', 'Jacques-Louis David', '1793', 
    'Oil on Canvas', 'A political painting showing the aftermath of a murder during the French Revolution.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0_OM9ofFtnbDqStXUqyhCFAl_PjWHqYmCg&s'
  ),
  new Art(
    'a16', ['s8'], 'The Apotheosis of Homer', 'Jean-Auguste-Dominique Ingres', '1827', 
    'Oil on Canvas', 'A grand composition celebrating the poet Homer.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaPQ94UHgebRI5YNGibm6ut7kW6Lw5EHB9Yg&s'
  ),
  new Art(
    'a17', ['s9'], 'Wanderer above the Sea of Fog', 'Caspar David Friedrich', '1818', 
    'Oil on Canvas', 'A man contemplating a landscape of jagged peaks and mist.', 
    'https://d7hftxdivxxvm.cloudfront.net/?height=800&quality=85&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FxscrFu940ykaXFUJw9cdXA%2Fnormalized.jpg&width=622'
  ),
  new Art(
    'a18', ['s9'], 'Liberty Leading the People', 'Eugène Delacroix', '1830', 
    'Oil on Canvas', 'Commemorating the July Revolution of 1830.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTp66mXgDq_QYRRw6r8MK16XWor6SPCzk1jQ&s'
  ),
  new Art(
    'a19', ['s10'], 'Girl with Balloon', 'Banksy', '2002', 
    'Stencil Graffiti', 'A stencil mural showing a young girl reaching for a red balloon.', 
    'https://i.ytimg.com/vi/2kTwpOxEgzM/sddefault.jpg'
  ),
  new Art(
    'a20', ['s10'], 'Radiant Baby', 'Keith Haring', '1982', 
    'Ink on Paper', 'One of Haring\'s most recognizable icons, symbolizing life and energy.', 
    'https://www.haring.com/!/wp-content/uploads/2012/12/radiant_baby_90.jpg'
  ),
  new Art(
    'a21', ['s11'], 'The Sleeping Gypsy', 'Henri Rousseau', '1897', 
    'Oil on Canvas', 'A fantastical depiction of a lion observing a sleeping woman.', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwa7T374XjiXjnUuZ1YI1LLP9foUQSOYe_mQ&s'
  ),
  new Art(
    'a22', ['s11'], 'Self-Portrait with Thorns', 'Frida Kahlo', '1940', 
    'Oil on Canvas', 'A deeply personal symbolic portrait exploring pain and nature.', 
    'https://www.hrc.utexas.edu/frida-kahlo-self-portrait/images/frida-kahlo-self-portrait-640-full.jpg'
  ),
  new Art(
    'a23', ['s12'], 'Queen', 'Audrey Flack', '1976', 
    'Oil over Acrylic', 'An incredibly detailed still life featuring fruits and vibrant colors.', 
    'https://ids.si.edu/ids/deliveryService?id=SAAM-2022.11.5_1&max=640'
  ),
  new Art(
    'a24', ['s12'], 'Central Savings', 'Richard Estes', '1975', 
    'Oil on Canvas', 'A hyper-realistic urban scene with intricate reflections.', 
    'https://art.nelson-atkins.org/internal/media/dispatcher/27127/full'
  )
];