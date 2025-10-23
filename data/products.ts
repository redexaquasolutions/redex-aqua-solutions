import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'VIVITAMIN',
    category: 'Health',
    images: [
      'https://i.postimg.cc/Kjvj4fbL/Gemini-Generated-Image-c4i0wac4i0wac4i0.png',
      'https://i.postimg.cc/hvwmBVq8/Gemini-Generated-Image-zi0awnzi0awnzi0a.png',
      'https://i.postimg.cc/wB7767wH/Gemini-Generated-Image-2centw2centw2cen.png'
    ],
    composition: 'Essential Vitamins and Amino Acids',
    dosage: '5-10g per kg of meal',
    benefits: ['Boosts overall growth', 'Improves immunity', 'Enhances vitality'],
    description: 'A comprehensive vitamin premix to ensure balanced nutrition and robust health for prawns.',
    reviews: [
      { id: 1, author: 'Farmer Raju', rating: 5, comment: 'Excellent product! Saw great improvement in prawn vitality within weeks.' },
      { id: 2, author: 'Suresh Kumar', rating: 4, comment: 'Good results, but the smell is a bit strong. Prawns seem to like it though.' }
    ]
  },
  {
    id: 2,
    name: 'NEW PROBIT',
    category: 'Probiotics',
    images: ['https://i.postimg.cc/vZPLQ9Hv/Add-a-little-bit-of-body-text-8-1-1.png'],
    composition: 'Multi-strain Bacillus blend',
    dosage: '10g per 1kg of feed, or 500g per acre',
    benefits: ['Improves gut health', 'Enhances water quality', 'Suppresses harmful bacteria'],
    description: 'An advanced probiotic formula to maintain a healthy gut microbiome and clean pond environment.',
    reviews: [
        { id: 1, author: 'Anil Reddy', rating: 5, comment: 'NEW PROBIT is a game changer for my pond water quality. Highly recommend.' },
        { id: 2, author: 'Lakshmi BioFarms', rating: 5, comment: 'Best probiotic on the market. Reduced sludge and improved FCR.' },
        { id: 3, author: 'Prakash', rating: 4, comment: 'It works well. A bit expensive but worth the investment for a healthy pond.' }
    ]
  },
  {
    id: 3,
    name: 'C - STRENGTH',
    category: 'Health',
    images: ['https://i.postimg.cc/wB7767wH/Gemini-Generated-Image-2centw2centw2cen.png'],
    composition: 'Stabilized Vitamin C, Immune-stimulants',
    dosage: '3-5g per kg of feed during stress periods',
    benefits: ['Boosts immune system', 'Acts as an anti-stress agent', 'Aids in wound healing'],
    description: 'A high-potency Vitamin C supplement to strengthen the prawn\'s natural defenses against disease and stress.',
    reviews: [
        { id: 1, author: 'Coastal Aqua', rating: 5, comment: 'Very effective during rainy season to prevent stress. A must-have.' }
    ]
  },
  {
    id: 4,
    name: 'PURE ARMER',
    category: 'Health',
    images: ['https://i.postimg.cc/hvwmBVq8/Gemini-Generated-Image-zi0awnzi0awnzi0a.png'],
    composition: 'Herbal extracts, Beta-glucans',
    dosage: '5ml per kg of feed',
    benefits: ['Provides a protective shield', 'Enhances disease resistance', 'Natural and safe'],
    description: 'A natural armor for your prawns, formulated with herbal extracts to protect against common pathogens.',
    reviews: []
  },
  {
    id: 5,
    name: 'RD YUCCA',
    category: 'Health',
    images: ['https://i.postimg.cc/JzJkfTz0/Gemini-Generated-Image-5kzrs75kzrs75kzr.png'],
    composition: 'Yucca schidigera extract',
    dosage: '250ml per acre of pond water',
    benefits: ['Reduces ammonia levels', 'Controls toxic gases', 'Improves water quality'],
    description: 'A natural Yucca extract solution to bind and neutralize harmful ammonia in pond water, ensuring a safer environment.',
    reviews: [
        { id: 1, author: 'Krishna Fisheries', rating: 5, comment: 'Works like a charm for ammonia control. Fast acting and effective.' },
        { id: 2, author: 'Ravi', rating: 4, comment: 'Good product. Helped reduce the foul smell from my pond.'}
    ]
  },
  {
    id: 6,
    name: 'FREE MOULT',
    category: 'Health',
    images: ['https://i.postimg.cc/RhCfmJLs/Gemini-Generated-Image-pniaqkpniaqkpnia.png'],
    composition: 'Minerals, Enzymes, and Molting aids',
    dosage: '10g per kg of feed during molting cycle',
    benefits: ['Synchronizes molting', 'Prevents molting-related mortality', 'Aids in quick shell formation'],
    description: 'A specialized formula to support prawns during the critical molting phase, ensuring a smooth and successful process.',
    reviews: [
        { id: 1, author: 'Godavari Farms', rating: 5, comment: 'Reduced mortality during molting significantly. I use it every cycle.' }
    ]
  },
  {
    id: 7,
    name: 'DIAMOND GEL',
    category: 'Feed',
    images: ['https://i.postimg.cc/QdZDyVTX/Gemini-Generated-Image-xiziwoxiziwoxizi.png'],
    composition: 'Polymeric binders, Attractants',
    dosage: '20-30ml per kg of feed',
    benefits: ['Excellent feed binder', 'Reduces nutrient loss in water', 'Improves feed attractability'],
    description: 'A high-quality gel binder for coating feed with medicines and supplements, ensuring effective delivery to the prawns.',
    reviews: [
        { id: 1, author: 'Murthy', rating: 4, comment: 'Good binder gel. Mixes well with feed and supplements.' }
    ]
  },
  {
    id: 8,
    name: 'DI-CAL-P',
    category: 'Health',
    images: ['https://i.postimg.cc/NfHQgZqT/Gemini-Generated-Image-ka2memka2memka2m.png'],
    composition: 'Dicalcium Phosphate, essential minerals',
    dosage: '10g per kg of feed',
    benefits: ['Essential for shell formation', 'Maintains mineral balance', 'Prevents soft-shell issues'],
    description: 'A calcium and phosphorus supplement critical for strong exoskeleton development and overall mineral health.',
    reviews: [
        { id: 1, author: 'United Aqua', rating: 5, comment: 'Completely solved our soft-shelling problem.'},
        { id: 2, author: 'Farmer Friend', rating: 4, comment: 'A staple mineral supplement for good shell quality.'}
    ]
  },
  {
    id: 9,
    name: 'SREE ANCHOR',
    category: 'Probiotics',
    images: ['https://i.postimg.cc/GpHNmQFn/Gemini-Generated-Image-9hiro19hiro19hir.png'],
    composition: 'Beneficial soil and water probiotics',
    dosage: '1kg per acre',
    benefits: ['Anchors beneficial bacteria', 'Decomposes organic sludge', 'Stabilizes pond bottom'],
    description: 'A powerful probiotic that anchors beneficial microbes to the pond bottom, improving soil quality and water parameters.',
    reviews: [
        { id: 1, author: 'Delta Aqua Tech', rating: 5, comment: 'Best for pond bottom management. Keeps the sludge under control.' },
        { id: 2, author: 'Ganesh', rating: 5, comment: 'I have been using this for 2 years. Very reliable results.'},
        { id: 3, author: 'Vijay', rating: 4, comment: 'Good soil probiotic.'}
    ]
  },
  {
    id: 10,
    name: 'ROYAL ZEO',
    category: 'Probiotics',
    images: ['https://i.postimg.cc/qM6rM2TC/Gemini-Generated-Image-m8rkrem8rkrem8rk.png'],
    composition: 'High-grade Zeolite minerals',
    dosage: '10-20kg per acre as needed',
    benefits: ['Absorbs toxic gases and heavy metals', 'Purifies water', 'Provides a substrate for beneficial bacteria'],
    description: 'Premium quality zeolite for effective pond water purification and detoxification.',
    reviews: [
        { id: 1, author: 'Aqua Pure Solutions', rating: 4, comment: 'Decent quality zeolite at a fair price.' }
    ]
  },
  {
    id: 11,
    name: 'RD YEAST',
    category: 'Probiotics',
    images: ['https://i.postimg.cc/vmvTLk3k/Gemini-Generated-Image-lghr4rlghr4rlghr.png'],
    composition: 'Saccharomyces cerevisiae',
    dosage: '5g per kg of feed',
    benefits: ['Improves digestion', 'Acts as a growth promoter', 'Enhances gut microflora'],
    description: 'A potent yeast probiotic that aids in digestion and nutrient absorption, leading to better growth and health.',
    reviews: []
  },
  {
    id: 12,
    name: 'REDEX FRESH TABLETS',
    category: 'Health',
    images: ['https://i.postimg.cc/8khB80FB/Gemini-Generated-Image-jqecyfjqecyfjqec.png'],
    composition: 'Active oxygen releasing compounds',
    dosage: '1 tablet per 1000 square meters',
    benefits: ['Increases dissolved oxygen', 'Reduces pathogenic load', 'Keeps pond water fresh'],
    description: 'Easy-to-use tablets that slowly release oxygen, ensuring a fresh and healthy aquatic environment.',
    reviews: [
        { id: 1, author: 'Modern Farmer', rating: 5, comment: 'Very useful for emergency oxygen depletion. Easy to apply.'},
        { id: 2, author: 'Subbarao', rating: 4, comment: 'It works, but the effect seems to last for a shorter time than advertised. Still a good product.'}
    ]
  },
  {
    id: 13,
    name: 'HYGIENIC GUT PRO',
    category: 'Probiotics',
    images: ['https://i.postimg.cc/j52LvvW8/Gemini-Generated-Image-nwnir1nwnir1nwni.png'],
    composition: 'Synergistic blend of gut-specific probiotics and prebiotics',
    dosage: '5g per kg of feed',
    benefits: ['Maintains gut hygiene', 'Prevents white gut disease', 'Enhances nutrient absorption'],
    description: 'A powerful probiotic for maintaining a clean and healthy gut, crucial for preventing common digestive ailments in prawns.',
    reviews: [
        { id: 1, author: 'Progressive Farmer', rating: 5, comment: 'Effective against white gut issues. Gut health has visibly improved.' }
    ]
  }
];