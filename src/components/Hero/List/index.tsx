import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useListStyles from "./List.styles";

const List = (props: IListProps) => {
  const styles = useListStyles();
  return (
    <div className={`${styles.list}`}>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {props.data.map((data, i) => (
          <SwiperSlide className='list-item' key={i}>
            {props.createItem({ data })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default List;
