import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const Rocket = () => {
  const dispatch = useDispatch();
  const { games } = useSelector((store) => store.game);
  const { id }=useParams()
  console.log(id)

  const getGamesById = games.filter((game)=> game.id===id)
  console.log(getGamesById)

  useEffect(() => {
    dispatch(getGame());
  }, [dispatch]);




    return (
      <>

           { getGamesById .map((game)=>{
                      <div key={game.id}>
                      <div className="ui link cards">
                        <div className="card">
                          <div className="content">
                            <div className="header">{game.name}</div>
                            <div className="meta price">
                              $
                              {price}
                            </div>
                            <img src={game.images} alt={game.name} className="meta" />
                          </div>
                        </div>
                      </div>
                      </div>
           })}



      </>
    );


};

export default Rocket;
