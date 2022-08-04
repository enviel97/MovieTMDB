import { genarateEmptyList } from "@helpers/entity";
import React from "react";
import SwiperCore, { Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useListStyles from "./List.styles";

const List = (props: IListProps) => {
  SwiperCore.use([Autoplay, Lazy]);
  const styles = useListStyles();

  const data = props.data.length === 0 ? genarateEmptyList() : props.data;

  return (
    <div className={`${styles.list} ${props.className || ""}`}>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        lazy={{ loadPrevNext: true, elementClass: "list-item" }}
      >
        {data.map((data, i) => (
          <SwiperSlide className='list-item' key={i}>
            <>{props.createItem({ data })}</>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default List;
