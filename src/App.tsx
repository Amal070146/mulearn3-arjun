import Banner from './Banner';
import SkillsAndChances from './SkillsAndChances';
import styles from './banner.module.css';

const imageCount = 5;
const images = new Array(imageCount).fill(`./logos/`).map((image, ix) => ({
  id: crypto.randomUUID(),
  image: `${image}${ix + 1}.png`,
}));

const cardData: {
  title: string;
  description: string;
  image: string;
  badges: string[];
}[] = [
  {
    title: 'Visual ONeSigner',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
    image: 'https://placehold.co/90',
    badges: ['Adoe Suite', 'Sketch'],
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
    badges: ['Adoe Suite', 'Sketch'],
    image: 'https://placehold.co/90',
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
    badges: ['Adoe Suite', 'Sketch'],
    image: 'https://placehold.co/90',
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
    badges: ['Adoe Suite', 'Sketch'],
    image: 'https://placehold.co/90',
  },
  {
    title: 'Visual Dedsigner',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
    badges: ['Adoe Suite', 'Sketch'],
    image: 'https://placehold.co/90',
  },
];

export default function App() {
  return (
    <>
      <div className={styles.App}>
        <Banner images={images} speed={12000} />
      </div>
      <div className={styles.App}>
        <SkillsAndChances cardData={cardData} />
      </div>
    </>
  );
}
