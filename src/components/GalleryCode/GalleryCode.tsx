import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import { GalleryWrapper } from "./GalleryCode.styled";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

const code1 = `
function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}
`.trim();

const code2 = `
export function parseModelTuple(
  response: Response,
  value: {+[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}
`.trim();

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
        <SwiperSlide>
          <CodeSnippet code={code2} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code1} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code2} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code1} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code2} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code1} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code2} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code1} />
        </SwiperSlide>
        <SwiperSlide>
          <CodeSnippet code={code2} />
        </SwiperSlide>
      </Swiper>
    </GalleryWrapper>
  );
};

export default GalleryCode;
