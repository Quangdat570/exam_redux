import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import { loadInfo, selectInfos } from "./Gameinfo.slice";
import { selectGameDetail } from "./Gameinfo.slice";
import { LoadGameDetail } from "./Gameinfo.slice";

function Info() {
  const dispatch = useDispatch();
  const {id} = useParams();

  const game = useSelector(selectGameDetail);

  useEffect(() => {
    dispatch(LoadGameDetail(id));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-center fs-1">{game.title}</div>
      <img src={game.thumbnail} alt="" className="" />
      <div>{game.short_description}</div>
      <div>
        {" "}
        DownLoad : <a href="#">{game.short_description}</a>
      </div>
      <div>{game.genre}</div>
      <div>{game.platform}</div>
      <div>{game.publisher}</div>
      <div>{game.developer}</div>
      <div>{game.release_date}</div>
      <div>
        {" "}
        <a href="#">{game.freetogame_profile_url}</a>
      </div>
    </div>
  );
}

export default Info;

