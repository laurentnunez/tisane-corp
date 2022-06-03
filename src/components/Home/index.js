import Podcasts from '../Podcasts';
// styles
import './home.scss';

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Tisane Corp. Podcasts</h1>
      <Podcasts />
    </div>
  );
}

export default Home;