import { FC } from 'react';
import { GUID, OfferItem } from '../common/types';
import { Link } from 'react-router-dom';
import { route } from '../common/constants';

interface CardProps {
  offer: OfferItem;
  onHover: (id: GUID) => void;
  onBlur: () => void;
}

export const Card: FC<CardProps> = ({ offer, onHover, onBlur }) => (
  <article className="cities__card place-card" onMouseEnter={() => onHover(offer.id)} onMouseLeave={onBlur}>
    {offer.isPremium && <div className="place-card__mark"> <span>Premium</span></div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <Link to={route.offer(offer.id)}>
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
      </Link>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          {offer.isFavorite ? <span className="visually-hidden">In bookmarks</span> : <span className="visually-hidden">To bookmarks</span>}
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{ width: `${offer.rating * 20}%` }} ></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={route.offer(offer.id)}>{offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);
