import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getGame } from '../Redux/game/game';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);

  const { games } = useSelector((store) => store.game);
  console.log(games);
  const renderList = games.map((rocket) => {
    const {
      id, name, price, images,
    } = rocket;
    return (
      <>
          <Link to={`/profile/${id}`}>
        <div key={id}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">
                  $
                  {price}
                </div>
                <img src={images} alt={name} className="meta" />
              </div>
            </div>
          </div>
        </div>
        </Link>

      </>
    );
  });
  return <>{renderList}</>;
};

export default Rocket;
