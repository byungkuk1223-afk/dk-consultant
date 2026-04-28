"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";

const GROUP_01 = [
  { img: "/img/people_img_c.png",        title: "CEO / Founder​",   name: "David Kim" },
  { img: "/img/people_img_new2_b.png",   title: "CEO / Healthcare", name: "Cheolsoo Kim​" },
];

const GROUP_05 = [
  { img: "/img/people_img_new2_h.png",   title: "COO",                  name: "Joonwoong Kong​" },
  { img: "/img/people_img_new2_c3.png",  title: "CFO​",                 name: "Eunyoung Choi​" },
  { img: "/img/people_img_new2_a.png",   title: "Executive director​",  name: "Jongsang Lee​" },
  { img: "/img/people_img_new2_d_n.png", title: "Managing Director",    name: "Daniel Jo​" },
];

const GROUP_02 = [
  { img: "/img/people_img_i2.png",       title: "Director",                     name: "Minkyung Koh" },
  { img: "/img/people_img_e.png",        title: "Healthcare Senior Advisor",    name: "Jaesun Kim​​" },
  { img: "/img/people_img_new2_g1.png",  title: "Financial Senior Advisor",     name: "Kihwan Na​" },
];

function PersonCard({ img, title, name, letterSpacing }: { img: string; title: string; name: string; letterSpacing?: string }) {
  return (
    <li style={{ backgroundImage: `url('${img}')`, backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundSize: "250px 202px" }}>
      <div className="name">
        {title}
        <p style={letterSpacing ? { letterSpacing } : {}}>{name}</p>
      </div>
    </li>
  );
}

export default function PeoplePage() {
  return (
    <>
      <Header scrolled={true} />
      <main style={{ paddingTop: 80, minHeight: "100vh", background: "#fff", minWidth: 1200 }}>
        <AboutHero active="people" />

        <div className="dk-sub">
          <div className="dk-center">
            <div className="dk-sub-t">Our People</div>
            As an independent financial advisor, DK Consultants is designed to focus on the clients. You will meet a team of professionals who each have a unique skill set and many years of industry experience. We share a common goal, Make Your Vision a Reality.​
          </div>

          <div className="dk-people">

            {/* Row 1: 2 people, centered */}
            <div style={{ display: "block" }}>
              <ul style={{ width: 600, margin: "0 auto" }}>
                {GROUP_01.map(p => <PersonCard key={p.name} {...p} />)}
              </ul>
            </div>

            {/* Row 2: 4 people, centered */}
            <div>
              <ul style={{ width: 1200, margin: "0 auto" }}>
                {GROUP_05.map(p => <PersonCard key={p.name} {...p} />)}
              </ul>
            </div>

            {/* Row 3: 3 people, centered */}
            <div style={{ display: "block" }}>
              <ul style={{ width: 900, margin: "0 auto" }}>
                {GROUP_02.map(p => <PersonCard key={p.name} {...p} letterSpacing={p.name === "Kihwan Na​" ? "-1px" : undefined} />)}
              </ul>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
