import useAppSelector from "@/hooks/api/useAppSelector";
import { selectSearchById } from "@servers/repo/video/search.slice";
import useSearchItem from "../styles/SearchItem.styles";
import React from "react";
import { personGender } from "@servers/types/gender";
import { BsGraphUp } from "react-icons/bs";
import List from "@components/Hero/List";
import MovieItem from "@pages/Home/components/HomeListMovie/MovieItem";
import { mapDatasToProps } from "@pages/Catalog/helpers/mapping";
import SearchItemImage from "../../SearchItemImage";

const SearchPeopleItem = (props: SearchItemProps) => {
  const { id, className } = props;
  const styles = useSearchItem();
  const data = useAppSelector((state) => selectSearchById(state, id));
  if (!data || data.media_type !== "person") {
    throw new Error(`'Wrong movie ${id}'`);
  }
  const person = data as Person;
  const image = person.profile_path;

  return (
    <div className={`${className || ""} ${styles.SearchItem}`}>
      <SearchItemImage
        className={styles.SearchItemImage}
        imagePath={image}
        aldut={person.adult}
        alt={`People: ${person.name}`}
      />
      <div className={styles.SearchItemInfo}>
        <div className='header'>
          <h2 className='header__title'>
            {person.name}
            <p className='header__job'>
              (&nbsp;Main:&nbsp;{person.known_for_department}
              &nbsp;-&nbsp;Gender:&nbsp; {personGender[person.gender]}&nbsp;)
            </p>
          </h2>
        </div>
        <div className='decription'>
          <List
            className='decription__project-participate'
            data={mapDatasToProps(person.known_for)}
            createItem={({ data }) => <MovieItem {...data} isLoading={false} />}
          />
          <div className='decription__info-voting'>
            <span>
              <BsGraphUp /> &emsp; {person.popularity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchPeopleItem;
