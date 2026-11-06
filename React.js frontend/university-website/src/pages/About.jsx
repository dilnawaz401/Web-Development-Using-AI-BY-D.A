import PageHeader from "../components/PageHeader";
import { image } from "../lib/image";

const values = [
  {
    icon: "bi-lightbulb",
    title: "Curiosity",
    text: "We reward questions as much as answers and encourage playful experimentation.",
  },
  {
    icon: "bi-hand-thumbs-up",
    title: "Integrity",
    text: "We hold ourselves to the highest academic and professional ethical standards.",
  },
  {
    icon: "bi-people",
    title: "Community",
    text: "We win together — students, faculty and staff support one another.",
  },
  {
    icon: "bi-rocket-takeoff",
    title: "Impact",
    text: "We build technology that improves lives, not just systems that work.",
  },
];

const leadership = [
  {
    name: "Dr. Helena Vasquez",
    title: "Vice-Chancellor",
    image: image(
      "professional portrait of a confident female university vice chancellor in a suit",
      "square"
    ),
  },
  {
    name: "Prof. Daniel Okoro",
    title: "Dean, School of Computing",
    image: image(
      "professional portrait of a male african university dean wearing glasses and a blazer",
      "square"
    ),
  },
  {
    name: "Dr. Mei Lin Chen",
    title: "Head of Research",
    image: image(
      "professional portrait of a female asian university research director in a blazer",
      "square"
    ),
  },
  {
    name: "Mr. Samuel Adeyemi",
    title: "Registrar",
    image: image(
      "professional portrait of a male university registrar in formal attire",
      "square"
    ),
  },
  {
    name: "Dr. Priya Raghunathan",
    title: "Dean of Students",
    image: image(
      "professional portrait of a female indian university dean smiling warmly",
      "square"
    ),
  },
  {
    name: "Mr. James Whitfield",
    title: "Director of Industry Partnerships",
    image: image(
      "professional portrait of a middle aged male director in a business suit",
      "square"
    ),
  },
];

const timeline = [
  {
    year: "1998",
    title: "Founded",
    text: "Tech University opens with 240 students and a single computing faculty.",
  },
  {
    year: "2005",
    title: "First Research Centre",
    text: "The Applied Computing Research Centre is established with national funding.",
  },
  {
    year: "2012",
    title: "Campus Expansion",
    text: "A new 40-acre campus, library and student village are completed.",
  },
  {
    year: "2019",
    title: "Global Partnerships",
    text: "Exchange agreements signed with 30 universities across four continents.",
  },
  {
    year: "2026",
    title: "AI & Robotics Centre",
    text: "Our newest research centre opens, focused on applied AI and autonomous systems.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Tech University"
        subtitle="A technology-first university built around one belief: the best way to learn is to build."
      />

      {/* ---------- Intro ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">
                Learning by building, since 1998
              </h2>
              <p className="text-secondary">
                Tech University was founded by a group of engineers and
                educators who wanted a different kind of institution — one where
                students work on real problems from their very first semester.
                Today we are a community of more than 12,500 students and 480
                faculty across three schools of computing.
              </p>
              <p className="text-secondary mb-4">
                Our studios, laboratories and industry partnerships mean your
                education is hands-on from day one. You will graduate with a
                portfolio, not just a transcript.
              </p>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-patch-check-fill text-primary fs-5"></i>
                    <span className="fw-semibold">Accredited programs</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bi bi-patch-check-fill text-primary fs-5"></i>
                    <span className="fw-semibold">1:18 faculty ratio</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                className="rounded-4 shadow-sm w-100"
                src={image(
                  "students and professors collaborating in a bright modern university study space",
                  "landscape_4_3"
                )}
                alt="Students collaborating on campus"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Mission & Values ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">What Guides Us</p>
            <h2 className="fw-bold display-6 mb-3">Mission &amp; Values</h2>
            <p className="text-secondary mx-auto" style={{ maxWidth: 720 }}>
              <strong>Our mission:</strong> to educate engineers who solve
              meaningful problems and to advance technology that serves people.
            </p>
          </div>

          <div className="row g-4">
            {values.map((value) => (
              <div className="col-sm-6 col-lg-3" key={value.title}>
                <div className="tu-card h-100 p-4 bg-white">
                  <span className="tu-icon-tile mb-3">
                    <i className={`bi ${value.icon}`}></i>
                  </span>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-secondary mb-0">{value.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Accreditation & Rankings ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <p className="tu-eyebrow mb-2">Recognition</p>
              <h2 className="fw-bold mb-3">Accreditation &amp; Rankings</h2>
              <p className="text-secondary mb-0">
                Our programs are recognised nationally and internationally, and
                our graduates are recruited by leading technology companies.
              </p>
            </div>

            <div className="col-lg-7">
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <i className="bi bi-award fs-3 text-primary"></i>
                    <h6 className="fw-bold mt-3 mb-1">
                      Nationally Accredited
                    </h6>
                    <p className="text-secondary mb-0 small">
                      All degree programs hold full national accreditation.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <i className="bi bi-trophy fs-3 text-primary"></i>
                    <h6 className="fw-bold mt-3 mb-1">Top 5 in Computing</h6>
                    <p className="text-secondary mb-0 small">
                      Ranked among the top five computing universities
                      nationally.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <i className="bi bi-graph-up-arrow fs-3 text-primary"></i>
                    <h6 className="fw-bold mt-3 mb-1">Research Excellence</h6>
                    <p className="text-secondary mb-0 small">
                      Highly rated for research impact in applied computing.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded-4 p-4 h-100">
                    <i className="bi bi-briefcase fs-3 text-primary"></i>
                    <h6 className="fw-bold mt-3 mb-1">Employer Rated</h6>
                    <p className="text-secondary mb-0 small">
                      Preferred graduate employer rating of 94%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Leadership ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Our People</p>
            <h2 className="fw-bold display-6 mb-0">Leadership</h2>
          </div>

          <div className="row g-4">
            {leadership.map((person) => (
              <div className="col-sm-6 col-lg-4" key={person.name}>
                <div className="tu-card h-100 p-4 bg-white text-center">
                  <img
                    className="tu-avatar mx-auto mb-3"
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />
                  <h5 className="fw-bold mb-1">{person.name}</h5>
                  <p className="text-primary fw-semibold mb-0 small">
                    {person.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Campus Life ---------- */}
      <section className="tu-section">
        <div className="container">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Beyond the Classroom</p>
            <h2 className="fw-bold display-6 mb-0">Campus Life</h2>
          </div>

          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <p className="text-secondary">
                Life at Tech University extends far beyond lectures. Our campus
                is home to more than 60 student clubs, a maker space, sports
                facilities and a thriving calendar of hackathons, cultural
                festivals and guest talks.
              </p>
              <p className="text-secondary mb-4">
                Whether you are competing in a capture-the-flag tournament,
                leading a robotics club or simply relaxing in the student
                village, you will find your people here.
              </p>
              <ul className="list-unstyled d-grid gap-2 mb-0">
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  60+ clubs and societies
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  On-campus student village and dining
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Sports centre, gym and esports arena
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  Makerspace with 3D printing and electronics labs
                </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <img
                    className="rounded-4 w-100"
                    style={{ height: 220, objectFit: "cover" }}
                    src={image(
                      "university students studying together outdoors on a sunny campus lawn",
                      "portrait_4_3"
                    )}
                    alt="Students relaxing on campus"
                    loading="lazy"
                  />
                </div>
                <div className="col-6">
                  <img
                    className="rounded-4 w-100"
                    style={{ height: 220, objectFit: "cover" }}
                    src={image(
                      "university makerspace with 3d printers and electronics equipment",
                      "portrait_4_3"
                    )}
                    alt="University makerspace"
                    loading="lazy"
                  />
                </div>
                <div className="col-12">
                  <img
                    className="rounded-4 w-100"
                    style={{ height: 200, objectFit: "cover" }}
                    src={image(
                      "students competing at a university hackathon with laptops and whiteboards",
                      "landscape_16_9"
                    )}
                    alt="University hackathon"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Timeline ---------- */}
      <section className="tu-section-alt">
        <div className="container tu-section">
          <div className="text-center mb-5">
            <p className="tu-eyebrow mb-2">Our Journey</p>
            <h2 className="fw-bold display-6 mb-0">History &amp; Timeline</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul className="tu-timeline list-unstyled mb-0">
                {timeline.map((item) => (
                  <li key={item.year}>
                    <span className="badge text-bg-primary mb-2">
                      {item.year}
                    </span>
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="text-secondary mb-0">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
