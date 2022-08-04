import React from "react";
import SwiperCore, { Autoplay, Lazy } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useHeroSlideStyles from "./HeroSlide.styles";

const HeroSlide = <T = any,>({ data, createItem }: IHeroSlideProps<T>) => {
  const styles = useHeroSlideStyles();
  SwiperCore.use([Autoplay, Lazy]);

  return (
    <div className={styles.heroSlide}>
      <Swiper
        lazy={{ loadPrevNext: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
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
