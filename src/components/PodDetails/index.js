// styles
import './poddetails.scss';
import { FiPlay } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function PodDetails() {

  return (
   <div className="poddetails">
    <div className="poddetails__left-section">
     <img className="poddetails__image" alt= "Un Coin de Ciné" src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/19057193/19057193-1648472550842-a7ea2a84d72c6.jpg"/>
     <h2 className="poddetails__title">Un Coin de Ciné</h2>
      <p className="poddetails__description">Un Coin de Ciné, c'est quoi ? C'est un podcast sur le cinéma animé par des p'tits gars du sud de la France qui veulent, avant tout, partager et discuter de cinoche en toute simplicité.</p>
      <div className="poddetails__social">
        <div className="poddetails__logo-facebook"><FaFacebook/></div>
        <div className="poddetails__logo-instagram"><FaInstagram/></div>
      </div>
    </div>
    <div className="poddetails__right-section">
      <div className="poddetails__post">
       <div className="poddetails__logo-play"><FiPlay/></div>
       <div className="poddetails__post-title">Le Titre de l'épisode</div>
       <p className="poddetails__post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
      </div>
      <div className="poddetails__post">
      <FiPlay/>
       <div className="poddetails__post-title">Le Titre de l'épisode</div>
       <p className="poddetails__post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
      </div>
      <div className="poddetails__post">
      <FiPlay/>
       <div className="poddetails__post-title">Le Titre de l'épisode</div>
       <p className="poddetails__post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
      </div>
      <div className="poddetails__post">
      <FiPlay/>
       <div className="poddetails__post-title">Le Titre de l'épisode</div>
       <p className="poddetails__post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
      </div>
      <div className="poddetails__post">
      <FiPlay/>
       <div className="poddetails__post-title">Le Titre de l'épisode</div>
       <p className="poddetails__post-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.</p>
      </div>
    </div>
   </div> 
  );
}

export default PodDetails;