import '../style/NewsLetters.scss';
import CloseNl from '../assets/closeNL.png';
import imgNL from '../assets/imgNL.jpg';
import { useState } from 'react';

function NewsLetters() {
    const [closeNewsLetter, setCloseNewsLetter] = useState(true);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isInputEmpty, setIsInputEmpty] = useState(false);

    const handleCloseNewsLetter = () => {
        setCloseNewsLetter(false);
    };

    const handleSubscribe = () => {
        const inputEmail = document.querySelector('.inputNL').value;
        if (inputEmail.trim() !== '') {
            setIsSubscribed(true);
            setIsInputEmpty(false);
        } else {
            setIsInputEmpty(true);
        }
    };

    return (
        <div className={`backGroundNL ${closeNewsLetter ? 'visible' : 'hidden'}`}>
            <div className={`ModalNewsLetter ${closeNewsLetter ? 'visible' : 'hidden'}`}>
                <img className="imgNL" src={imgNL} alt="Image de la NewsLetter." />
                <div className='text'>
                    <h1 className='titleNL'>VESTIS</h1>
                    <p className='textNL'>
                        Kaliméra (Bonjour) <br/><br/>
                        Ne ratez aucune Promo divine ! Inscrivez-vous à notre newsletter et soyez les premiers à profiter d'offres antique exclusives. Renseignez simplement votre adresse email pour débloquer des réductions sensationnelles. Ne passez pas à côté, l'économie commence par un clic !
                    </p>
                    <input className='inputNL' type="text" placeholder='   Zeus-la-foudre@Olympe.com' />
                    <button className='btnNL' onClick={handleSubscribe}>
                        Subscribe
                    </button>
                    {isSubscribed && (
                        <p className='thxSub'> ⚡ Non de Zeus, Merci pour votre inscription à notre Newsletter ! ⚡ </p>
                    )}
                    {isInputEmpty && (
                        <p className='thxSub'> ⚠️ Merci de renseigner votre email pour pouvoir accéder aux avantages divins ! ⚠️ </p>
                    )}
                </div>
                <div className='CloseNL'>
                    <img
                        className="CloseNewsLetter"
                        src={CloseNl}
                        alt="Fermer la NewsLetter"
                        onClick={handleCloseNewsLetter}
                    />
                </div>
            </div>
        </div>
    );
}

export default NewsLetters;
