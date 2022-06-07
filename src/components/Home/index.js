import Podcasts from '../Podcasts';
// styles
import './home.scss';

function Home() {
  return (
    <div className="home">
      <h1 className="home__title">Tisane Corp. Podcasts</h1>
      <p className="home__description">Nec minus feminae quoque calamitatum participes fuere similium. nam ex hoc quoque sexu peremptae sunt originis altae conplures, adulteriorum flagitiis obnoxiae vel stuprorum. inter quas notiores fuere Claritas et Flaviana, quarum altera cum duceretur ad mortem, indumento, quo vestita erat, abrepto, ne velemen quidem secreto</p>
      <Podcasts />
    </div>
  );
}

export default Home;