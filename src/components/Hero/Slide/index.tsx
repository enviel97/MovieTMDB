import React from "react";
import SwiperCore, { Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useHeroSlideStyles from "./HeroSlide.styles";

const HeroSlide = <T = any,>({ data, createItem }: IHeroSlideProps<T>) => {
  const styles = useHeroSlideStyles();
  SwiperCore.use([Autoplay, Lazy]);

  return (
    <div className={styles.heroSlide}>
      <Swiper autoplay={{ delay: 5000 }} spaceBetween={0} slidesPerView={1}>
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              {({ isActive }) =>
                createItem({
                  data: item,
                  className: `${isActive ? "active" : ""}`,
                })
              }
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
