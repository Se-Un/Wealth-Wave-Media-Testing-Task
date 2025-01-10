import styles from './game.module.scss';

function Game() {
  return (
    <section className={styles.game}>
      <iframe className={styles.content} 
        src="https://esporte-br77.com/game-dir/index.html" width={1280} height={620} title='game'>
      </iframe>
    </section>
  )
}

export default Game;