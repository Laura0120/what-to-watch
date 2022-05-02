import React, {useState} from "react";

import PreviewPlayer from "../../components/preview-player/preview-player";
import ShowMore from "../../components/show-more/show-more";
import {COUNT_MOVIE_PER_STEP} from "../../const";

const withPreviewPlayer = (Component) => {
  const WithPreviewPlayer = (props) => {
    const [currentMovie, setCurrentMovie] = useState(null);
    const [renderedMovieCount, setRenderedMovieCount] = useState(COUNT_MOVIE_PER_STEP);

    return <Component
      {...props}
      renderPlayer = {(video, preview, id) => {
        return (
          <PreviewPlayer
            video={video}
            preview={preview}
            isPlaying={id === currentMovie}
          />
        );
      }}
      renderedMovieCount={renderedMovieCount}
      renderShowMore = {()=>{
        return (
          <ShowMore onShowMoreClick={()=> {
            setRenderedMovieCount(renderedMovieCount + COUNT_MOVIE_PER_STEP);
          }}/>
        );
      }}
      onMouseOver={(evt) => {
        const activeMovie = evt.currentTarget;
        setCurrentMovie(parseInt(activeMovie.id, 10));
      }}
      onMouseOut={()=> {
        setCurrentMovie(null);
      }}
    />;
  };

  return WithPreviewPlayer;

};

export default withPreviewPlayer;
