import useFetchData from "@/hooks/api/useFetchData";
import { trailerVideo } from "@api/helpers";
import { formatDate } from "@helpers/date";
import videoApi from "@servers/api/videoApi";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useVideosStyles from "./Videos.styles";

const Videos = (props: VideosProp) => {
  const { id } = useParams();
  const styles = useVideosStyles();
  const { data } = useFetchData(
    [{ type: props.category, id: id! }],
    videoApi.getVideos
  );

  return (
    <div className={`container ${styles.video} ${props.className || ""}`}>
      <div className='section mb3'>
        {!data ? (
          <h2>Being upload ...</h2>
        ) : (
          data.results
            .slice(-5)
            .map((video) => <Video key={video.key} item={video} />)
        )}
      </div>
    </div>
  );
};

const Video = (props: { item: VideosDetail }) => {
  const { item } = props;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(1000);

  useEffect(() => {
    const ref = iframeRef.current;
    if (!ref) return;
    const height = (ref.offsetWidth * 9) / 16;
    setHeight(height);
  }, [iframeRef.current?.offsetWidth]);

  return (
    <div className='videoContent'>
      <div className='videoContent__title'>
        <h2>
          {item.name}&nbsp;
          <small style={{ color: "#ababab" }}>
            ({item.iso_639_1} - {item.iso_3166_1})
          </small>
        </h2>
        <span>{formatDate(item.published_at.toString())}</span>
      </div>
      <iframe
        ref={iframeRef}
        src={trailerVideo(item.key)}
        title={`video-${item.name}`}
        width='100%'
        height={height}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </div>
  );
};

export default Videos;
