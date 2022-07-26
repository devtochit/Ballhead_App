import React, { useEffect } from 'react';
import { useSelector, } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getGame } from '../Redux/game/game';

const Rocket = () => {
  const params = useParams();

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
        <div key={params.id.id}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{params.id.name}</div>
                <div className="meta price">
                  $
                  {price}
                </div>
                <img src={params.id.images} alt={name} className="meta" />
              </div>
            </div>

          </div>


        </div>
      </>
    );
  });
  return <>{renderList}</>;
};

export default Rocket;
