import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
			<Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={3} autoplay loop pagination navigation className="py-5 px-1 w-full">
				<SwiperSlide>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=1" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=2" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=3" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=4" className="!max-w-full" />
				</SwiperSlide>
			</Swiper>
		</main>
	);
}
