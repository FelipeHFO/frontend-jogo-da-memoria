import styles from './jogo-da-memoria.module.css';
import Header from 'components/Header/Header';
import Image from 'next/image';
import Card from 'components/Card/Card';
import { useId } from 'react';

const JogoDaMemoria = () => {
  const images = [
    '/assets/card-images/aatrox.jpg',
    '/assets/card-images/ahri.jpg',
    '/assets/card-images/azir.jpg',
    '/assets/card-images/diana.jpg',
    '/assets/card-images/fiora.jpg',
    '/assets/card-images/gragas.jpg',
    '/assets/card-images/jhin.jpg',
    '/assets/card-images/jinx.jpg',
    '/assets/card-images/leesin.jpg',
    // '/assets/card-images/mordekaiser.jpg',
    // '/assets/card-images/nasus.jpg',
    // '/assets/card-images/nocturne.jpg',
    // '/assets/card-images/pantheon.jpg',
    // '/assets/card-images/rammus.jpg',
    // '/assets/card-images/taliyah.jpg',
    // '/assets/card-images/teemo.jpg',
    // '/assets/card-images/tryndamere.jpg',
    // '/assets/card-images/twistedfate.jpg',
    // '/assets/card-images/twitch.jpg',
    // '/assets/card-images/vex.jpg',
    // '/assets/card-images/viego.jpg',
    // '/assets/card-images/vladimir.jpg',
    // '/assets/card-images/warwick.jpg',
    // '/assets/card-images/wukong.jpg',
    // '/assets/card-images/yasuo.jpg',
    // '/assets/card-images/zac.jpg',
    // '/assets/card-images/zeri.jpg',
    // '/assets/card-images/ziggs.jpg',
    // '/assets/card-images/zilean.jpg',
    // '/assets/card-images/zoe.jpg',
  ];
  const duplicatedImages = [
    '/assets/card-images/aatrox.jpg',
    '/assets/card-images/ahri.jpg',
    '/assets/card-images/azir.jpg',
    '/assets/card-images/diana.jpg',
    '/assets/card-images/fiora.jpg',
    '/assets/card-images/gragas.jpg',
    '/assets/card-images/jhin.jpg',
    '/assets/card-images/jinx.jpg',
    '/assets/card-images/leesin.jpg',
    ...images,
  ];

  duplicatedImages.sort(() => Math.random() - 0.5);

  return (
    <div className={styles.container}>
      <Header title="Jogo da Memória" />

      <main className={styles.main}>
        {duplicatedImages.map((item, index) => (
          <Card key={index} imageCard={item} altCard={item} />
        ))}
      </main>

      <aside className={styles.aside}>
        <h1>Pontos: </h1>
        <h1>Tempo: </h1>
        <h1>Número de Jogadas: </h1>
        <h1>Erros: </h1>

        <div>
          <button>Pausar</button>
          <button>Resetar</button>
        </div>
      </aside>
    </div>
  );
};

export default JogoDaMemoria;
