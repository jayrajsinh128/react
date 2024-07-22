import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)
  const[data,setData]=useState([])
  return (
    <>
        <header class="main_menu home_menu">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="index.html">
                           <img src="https://www.promotionalwears.com/image/cache/catalog/brand-logo/ambrane-brand-300x300.png" alt="logo"style={{height:"150px"}}/>  </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse main-menu-item justify-content-end"
                            id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                  
                                    <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="service.html">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="project.html">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="blog.html">Blog</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="blog.html" id="navbarDropdown"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        pages
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="single-blog.html">Single blog</a>
                                        <a class="dropdown-item" href="elements.html">Elements</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
      <Data arr={data}/>
      <footer class="footer-area">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-md-6 col-xl-3">
                    <div class="single-footer-widget footer_1">
                        <a href="index.html"> <img src="img/footer_logo.png" alt/> </a>
                        <p>But when shot real her. Chamber her one visite removal six
                            sending himself boys scot exquisite existend an </p>
                        <p>But when shot real her hamber her </p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-xl-4">
                    <div class="single-footer-widget footer_2">
                        <h4>Newsletter</h4>
                        <p>Stay updated with our latest trends Seed heaven so said place winged over given forth fruit.
                        </p>
                        <form action="#">
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Enter email address"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter email address'"/>
                                    <div class="input-group-append">
                                        <button class="btn" type="button"><i class="bi bi-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div class="social_icon">
                            <a href="#"> <i class="ti-facebook"></i> </a>
                            <a href="#"> <i class="ti-twitter-alt"></i> </a>
                            <a href="#"> <i class="ti-instagram"></i> </a>
                            <a href="#"> <i class="ti-skype"></i> </a>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 col-xl-3">
                    <div class="single-footer-widget footer_3">
                        <h4>Instagram</h4>
                        <div class="footer_img">
                            <div class="single_footer_img">
                                <img src="img/footer_img_1.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img_2.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img_3.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img_4.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img_5.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                            <div class="single_footer_img">
                                <img src="img/footer_img_6.png" alt/>
                                <a href="#"><i class="ti-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}


export default App
