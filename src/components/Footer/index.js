// styles
import './footer.scss';

function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">Copyright © Tisane Corp. Podcasts {year}</p>
    </footer>
  );
}

export default Footer;