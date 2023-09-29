import Card from 'src/components/shared/Card';
import Slider from 'src/components/shared/Slider';
import { useGetTestimonials } from 'src/hooks/useTestimonials';
import { ITestimonial } from 'src/types/Testimonials';

const Testimonials = () => {
  const { data } = useGetTestimonials({
    select: (data: any) => data?.data
  });

  const testimonials = data?.slice(0, 5);
  return (
    <div className="mt-[80px] bg-[url(https://edufund.co.id/testimonial.367b389a02e6009af1bf.svg)] bg-no-repeat bg-cover bg-center">
      <div className="lg:max-w-[1200px] mx-auto pt-[80px]">
        <p className="text-[2rem] text-[#0e2e4f] text-center font-bold">
          Apa Kata Mereka
        </p>

        {testimonials && testimonials?.length > 0 && (
          <Slider
            customClass="testimonials pt-[64px]"
            slidesPerView={1.75}
            spaceBetween={-100}
          >
            {testimonials?.map((testimonial: ITestimonial, index: number) => {
              return (
                <Slider.Content key={index}>
                  <Card customClass="lg:min-h-[300px] min-h-[400px]">
                    <Card.Header
                      img={testimonial?.avatar}
                      imgClass="w-[100px] h-[100px] rounded-[100px] object-fit"
                    />
                    <Card.Body>
                      <p className="text-[18px] text-[#525A67] text-center font-bold">
                        {testimonial?.title}
                      </p>
                      <p className="text-[14px] text-[#525A67] text-center ">
                        {testimonial?.comment}
                      </p>
                      <div>
                        <p className="text-[18px] text-[#525A67] text-center font-bold">
                          {testimonial?.name}
                        </p>
                        <p className="text-[14px] text-[#525A67] text-center ">
                          {testimonial?.occupation}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Slider.Content>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
