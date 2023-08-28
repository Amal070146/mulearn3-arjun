import styles from './card.module.css';
export default function Cards() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
    </div>
  );
}
function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.logoContainer}>
        <img src="https://placehold.co/90" alt="logo" width={90} height={90} />
        <p>Fun Design</p>
      </div>
      <div className={styles.content}>
        <h3>Visual Designer</h3>
        <p>
          We are looking for passionate designers with an experience of the same
          field, should have thorough understanding of Adobe Suit.
        </p>
        <div className={styles.badgeContainer}>
          <div className={styles.badge}>Adobe Suite</div>
          <div className={styles.badge}>Sketch</div>
        </div>
      </div>
    </div>
  );
}
