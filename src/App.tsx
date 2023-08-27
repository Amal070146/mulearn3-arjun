import Banner from './Banner';
import styles from './banner.module.css';

const imageCount = 5;
const images = new Array(imageCount).fill(`./logos/`).map((image, ix) => ({
  id: crypto.randomUUID(),
  image: `${image}${ix + 1}.png`,
}));

export default function App() {
  return (
    <div className={styles.App}>
      <Banner images={images} speed={8000} />
    </div>
  );
}
