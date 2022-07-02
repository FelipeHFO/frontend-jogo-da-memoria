import Image from 'next/image';
import styles from './Card.module.css';

type CardProps = {
  imageCard: string;
  altCard: string;
};

const Card = ({ imageCard, altCard }: CardProps) => {
  return (
    <div className={styles.cards}>
      <Image src={imageCard} alt={altCard} width={160} height={200} />
    </div>
  );
};

export default Card;
