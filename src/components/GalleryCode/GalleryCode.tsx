// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";

import { GalleryWrapper } from "./GalleryCode.styled";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

import { codeList } from "../../data/codeList";

const GalleryCode = () => {
  return (
    <GalleryWrapper>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: -10,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoHeight={true}
        spaceBetween={30}
        direction={"vertical"}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[EffectCoverflow, Mousewheel, Pagination]}
        mousewheel={true}
        className="mySwiper"
      >
        {codeList.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <CodeSnippet data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </GalleryWrapper>
  );
};

export default GalleryCode;
