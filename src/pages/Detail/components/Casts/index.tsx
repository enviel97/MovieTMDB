import useFetchData from "@/hooks/api/useFetchData";
import { w500Image } from "@api/helpers";
import videoApi from "@servers/api/videoApi";
import { Category } from "@servers/types/props";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import useCastsStyles from "./Casts.styles";
import noAvatarMale from "@assets/images/no-image-male.jpg";
import noAvatarFemale from "@assets/images/no-image-female.jpg";
import noAvatarPrivate from "@assets/images/no-image-private.jpg";
import List from "@components/Hero/List";

const getNoAvatar = (gender: number) => {
  if (gender === 1) return noAvatarFemale;
  if (gender === 2) return noAvatarMale;
  return noAvatarPrivate;
};

const Casts = (props: CastsProp) => {
  const { category } = useParams();
  const styles = useCastsStyles();
  const type = useMemo(
    () => (category === "movie" ? Category.movie : Category.tv),
    [category]
  );
  const { data } = useFetchData(
    [{ type: type, id: `${props.id}` }],
    videoApi.getCredit
  );
  if (!data) return <h2>Being upload ...</h2>;
  return (
    <div className={`${styles.casts} ${props.className || ""}`}>
      <div className='section__header'>
        <h2>Cast</h2>
      </div>
      <List
        className='castsContent'
        data={data.cast.sort((a, b) => b.popularity - a.popularity)}
        createItem={({ data }: { data: Cast }) => (
          <div key={`${data.id + 27}`} className='castsContent__item'>
            <img
              className='castsContent__item--img'
              src={
                !!data.profile_path
                  ? w500Image(data.profile_path)
                  : getNoAvatar(data.gender)
              }
              alt={`Avatar: ${data.name}`}
              loading={"lazy"}
              onError={(event) => {
                const image = event.currentTarget;
                image.src = getNoAvatar(data.gender);
              }}
            />
            <p className='castsContent__item--name'>{data.name}</p>
            {data.character.split("/").map((char, i) => (
              <p key={`${char}-${i}`} className='castsContent__item--character'>
                + {char}
              </p>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default Casts;
