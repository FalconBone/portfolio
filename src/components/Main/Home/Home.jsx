import classes from './Home.module.scss';

function Home() {
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <h1>
          Frontend <br/>
          React <br/>
          Разработчик <br/>
        </h1>
      </div>
      <div className={classes.photo}>
        
      </div>
    </div>
  );
}

export default Home;