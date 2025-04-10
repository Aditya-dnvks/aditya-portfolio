import "./App.css";

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">
            A.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Me
              </a>
              <a class="nav-link" href="#">
                Projects
              </a>
              <a class="nav-link" href="#">
                Blogs
              </a>
              <a class="nav-link" href="#">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        class="banner-section-bg-container d-flex justify-content-center align-items-center text-center"
        style={{ minHeight: "100vh" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5">
              <img
                src="https://res.cloudinary.com/dkuoichrp/image/upload/v1667316432/DSC_0009_mxoeew.jpg"
                class="img-fluid rounded-circle"
                alt="Aditya Dasari"
              />
            </div>
            <div class="col-12 col-md-7 mt-4">
              <h1 class="display-4 text">
                Hey, I'm <span class="text-primary">Aditya</span>
              </h1>
              <p class="lead text">
                Full Stack Developer | MERN Stack | Mobile App Developer
              </p>
              <a href="#contactMe" class="btn btn-primary btn-lg mt-3">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-section bg-light py-5">
        <div class="container">
          <h2 class="text-center">About Me</h2>
          <div class="row mt-5">
            <div class="col-md-6">
              <p>
                Hello, I'm Aditya Dasari, a Full Stack Developer proficient in
                MERN stack, with expertise in both frontend and backend
                development, as well as mobile app development. I hold a
                Bachelor's degree in Civil Engineering from NIT Andhra Pradesh
                (2017-2021), and I currently work as a developer and trainer at
                Error Technologies Limited.
              </p>
              <p>
                My passion lies in building scalable applications and solving
                complex problems. I enjoy teaching and sharing knowledge, which
                has helped me develop strong communication and presentation
                skills.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src="https://res.cloudinary.com/dkuoichrp/image/upload/v1667316432/DSC_0009_mxoeew.jpg"
                class="img-fluid rounded"
                alt="Aditya Dasari"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="skills-section py-5">
        <div class="container">
          <h2 class="text-center">Skills</h2>
          <div class="row text-center mt-5">
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  class="img-fluid"
                  alt="React JS"
                />
                <h4 class="mt-3 text">
                  React JS & <br />
                  React Native
                </h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://www.shutterstock.com/image-photo/kiev-ukraine-january-29-2017-600nw-576283471.jpg"
                  class="img-fluid mt-5 mb-3"
                  alt="Mobile Apps"
                />
                <h4 class="mt-3 text">Android /iOS</h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-js-img.png"
                  class="img-fluid"
                  alt="JavaScript"
                />
                <h4 class="mt-3 text">JavaScript</h4>
              </div>
            </div>

            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
                  class="img-fluid"
                  alt="Node.js"
                />
                <h4 class="mt-3 text">Node.js</h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/2048px-Python_logo_01.svg.png"
                  class="img-fluid"
                  alt="Python"
                />
                <h4 class="mt-3 text">Python</h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-html-img.png"
                  class="img-fluid"
                  alt="HTML"
                />
                <h4 class="mt-3 text">HTML</h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-css-img.png"
                  class="img-fluid"
                  alt="CSS"
                />
                <h4 class="mt-4 text">CSS</h4>
              </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
              <div class="skill-container shadow p-4 h-100">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-skills-bootstrap-img.png"
                  class="img-fluid mb-2"
                  alt="Bootstrap"
                />
                <h4 class="mt-3 text">Bootstrap</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="projects-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center">Projects</h2>
          <div class="row mt-5">
            <div class="col-12 col-md-6">
              <div class="project-container shadow p-4 mb-4">
                <iframe
                  src="https://giphy.com/embed/4H3Ii5eLChYul9p7NL"
                  width="480"
                  height="480"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL"></a>
                </p>
                <p>
                  <a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL"></a>
                </p>
                <h4>Project Name: Zaap</h4>
                <p>
                  A cross-platform mobile application for job hiring/job seeking
                  services. Built using React, Node.js, and Firebase.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="project-container shadow p-4 mb-4">
                <iframe
                  src="https://giphy.com/embed/4H3Ii5eLChYul9p7NL"
                  width="480"
                  height="480"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL"></a>
                </p>
                <h4>Project Name: Nxt Trendz App</h4>
                <p>
                  {" "}
                  E-commerce website (Clone of Amazon/Flipkart). Built using
                  React, Node.js,React Context and JWT authentication .
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="project-container shadow p-4 mb-4">
                <iframe
                  src="https://giphy.com/embed/4H3Ii5eLChYul9p7NL"
                  width="480"
                  height="480"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL"></a>
                </p>
                <h4>Project Name: Jobby App</h4>
                <p>
                  A Job searching web application portal. Built using
                  React,Node.js with JWT authentication.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="project-container shadow p-4 mb-4">
                <iframe
                  src="https://giphy.com/embed/4H3Ii5eLChYul9p7NL"
                  width="480"
                  height="480"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/stardust-stardustae-classic-computers-4H3Ii5eLChYul9p7NL"></a>
                </p>
                <h4>Project Name: Jobby App</h4>
                <h4>Project Name: Teacher Tune</h4>
                <p>
                  A platform to gather actioble feedback from students and to
                  imporve the teaching prowess of mentors. Built using
                  NodeBB,jquery,MongoDB.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="services-section py-5">
        <div class="container">
          <h2 class="text-center">Services</h2>
          <div class="row mt-5 text-center">
            <div class="col-12 col-md-4 mb-4">
              <div class="service-container shadow p-4">
                <h4>Full Stack Development</h4>
                <p>
                  End-to-end development of web applications using the MERN
                  stack.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="service-container shadow p-4">
                <h4>Mobile App Development</h4>
                <p>
                  Building cross-platform mobile applications using React
                  Native.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <div class="service-container shadow p-4">
                <h4>Mentorship & Training</h4>
                <p>
                  Providing training and mentorship in full-stack development
                  and problem-solving skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="blogs-section py-5 bg-light">
        <div class="container">
          <h2 class="text-center">Blogs</h2>
          <div class="row mt-5">
            <div class="col-12 col-md-6">
              <div class="blog-container shadow p-4 mb-4">
                <h4>Understanding React Hooks</h4>
                <p>
                  An in-depth guide on React Hooks, covering useState,
                  useEffect, and custom hooks.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="blog-container shadow p-4 mb-4">
                <h4>Building Scalable Node.js Applications</h4>
                <p>
                  Best practices and patterns for building scalable applications
                  using Node.js and Express.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials-section py-5">
        <div class="container">
          <h2 class="text-center">Testimonials</h2>
          <div class="row mt-5">
            <div class="col-12 col-md-6">
              <div class="testimonial-container shadow p-4 mb-4">
                <p>
                  "Aditya is an outstanding developer with a strong grasp of
                  both frontend and backend technologies. He was instrumental in
                  the success of our Teacher Tune project."
                </p>
                <h5>- Client Name</h5>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="testimonial-container shadow p-4 mb-4">
                <p>
                  "Aditya's mentorship and guidance were invaluable during our
                  React Native training sessions. He breaks down complex
                  concepts with ease."
                </p>
                <h5>- Student Name</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-section py-5 bg-light" id="contactMe">
        <div class="container">
          <h2 class="text-center">Contact Me</h2>
          <div class="row mt-5 justify-content-center">
            <div class="col-12 col-md-8">
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer class="text-center py-3">
        <p>&copy; 2024 Aditya Dasari. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
