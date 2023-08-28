import Banner from './Banner';
import Cards from './Card';
import styles from './banner.module.css';

const imageCount = 5;
const images = new Array(imageCount).fill(`./logos/`).map((image, ix) => ({
  id: crypto.randomUUID(),
  image: `${image}${ix + 1}.png`,
}));

const cardData: { title: string; description: string }[] = [
  {
    title: 'Visual ONeSigner',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
  },
  {
    title: 'Visual Designer',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
  },
  {
    title: 'Visual Dedsigner',
    description:
      'We are looking for passionate designers with an experience of the same field, should have thorough understanding of Adobe Suit.',
  },
];

export default function App() {
  return (
    <>
      <div className={styles.App}>
        <Banner images={images} speed={12000} />
      </div>
      <div className={styles.App}>
        <Cards cardData={cardData} />
      </div>
    </>
  );
}
