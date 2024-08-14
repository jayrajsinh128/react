import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Section4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="slick-prev slick-arrow"><i className="ti-angle-left"></i></button>,
    nextArrow: <button className="slick-next slick-arrow"><i className="ti-angle-right"></i></button>,
  };

  return (
    <div className="testimonial-area testimonial-padding" 
         data-background="assets/img/gallery/section_bg04.jpg" 
         style={{ backgroundImage: 'url(https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg04.jpg.webp)' }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-xl-10 col-lg-10 col-md-9">
            <Slider {...settings}>
              <div className="single-testimonial text-center">
                <div className="testimonial-caption">
                  <div className="testimonial-top-cap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="67px"
                      height="49px" >
                      <path
                        fillRule="evenodd"
                        fill="rgb(240, 78, 60)"
                        d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                      ></path>
                    </svg>
                    <p>
                      Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                      facilisis por incididunt ut labore et dolore mas.
                    </p>
                  </div>

                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img
                        alt=""
                        src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/Homepage_testi.png"
                      />
                    </div>
                    <div className="founder-text">
                      <span>Jessya Inn</span>
                      <p>Chief Photographer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* You can repeat the above block for each testimonial */}
              
              <div className="single-testimonial text-center">
                <div className="testimonial-caption">
                  <div className="testimonial-top-cap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="67px"
                      height="49px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(240, 78, 60)"
                        d="M57.053,48.209 L42.790,48.209 L52.299,29.242 L38.036,29.242 L38.036,0.790 L66.562,0.790 L66.562,29.242 L57.053,48.209 ZM4.755,48.209 L14.263,29.242 L0.000,29.242 L0.000,0.790 L28.527,0.790 L28.527,29.242 L19.018,48.209 L4.755,48.209 Z"
                      ></path>
                    </svg>
                    <p>
                      Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                      facilisis por incididunt ut labore et dolore mas.
                    </p>
                  </div>

                  <div className="testimonial-founder d-flex align-items-center justify-content-center">
                    <div className="founder-img">
                      <img
                        alt=""src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/Homepage_testi.png"/>
                    </div>
                    <div className="founder-text">
                      <span>Jessya Inn</span>
                      <p>Chief Photographer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more slides as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
