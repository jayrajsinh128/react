import React from 'react';

function Section2() {
  return (
    <div>
      <div
        className="support-company-area pt-100 pb-100 section-bg fix"
        data-background="assets/img/gallery/section_bg02.jpg"
        style={{ backgroundImage: 'url("https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/section_bg02.jpg.webp")' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                {/* Uncomment and use a valid image source */}
                <img alt="" src="https://preview.colorlib.com/theme/consultingbiz/assets/img/gallery/about.png" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2 mb-50">
                  <span>Our Top Services</span>
                  <h2>Our Best Services</h2>
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                    ess cillum dolore egru lofrre dsu quality mollit anim
                    laborumuis au dolor in voluptate velit cillu.
                  </p>
                  <p className="mb-65">
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate velit esscillumlore eu quife nrulla
                    parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                    iruxvfg dhjinulpadeserunt moll.
                  </p>
                  <a href="about.html" className="btn post-btn">
                    More About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
