import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
	return (
		<main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
			{/* If you disable loop, work fine, or change slidesPerView to number  < 3 */}
			<Swiper modules={[Navigation, Pagination, Autoplay]} slidesPerView={5} autoplay loop pagination navigation className="py-5 px-1 w-full">
				<SwiperSlide key={1}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=1" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={2}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=2" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={3}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=3" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={4}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=4" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={5}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=5" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={6}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=6" className="!max-w-full" />
				</SwiperSlide>
				<SwiperSlide key={7}>
					<img src=" https://fakeimg.pl/600x400/4924ff/909090?text=7" className="!max-w-full" />
				</SwiperSlide>
			</Swiper>
		</main>
	);
}
