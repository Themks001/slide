import { useState } from "react";
import Particle from "../component/particles.tsx";
import { Link } from "react-router-dom";
const Particles = () => {
 const [Index, setIndex] = useState(0);
 const arrayList = [
  "#particle0",
  "#particle1",
  "#particle2",
  "#particle3",
  "#particle4",
  "#particle5",
  "#particle6",
  "#particle7",
  "#particle8"
 ];
 if (Index == 8) {
  setIndex(0);
 }
 const currentSelected = arrayList[Index];
 const particlesItems = [
  {
   name: "Electrons",
   description:
    "Electrons are fundamental subatomic particles that play a pivotal role in the structure and behavior of matter. ",
   description2:
    "Discovered by J.J. Thomson in 1897, these negatively charged particles orbit the atomic nucleus in distinct energy levels, forming the outer shell of atoms. "
  },
  {
   name: "Positron",
   description:
    "A positron is a fundamental subatomic particle, often referred to as the antimatter counterpart of the electron. ",
   description2:
    "As a member of the lepton family, the positron carries a positive electric charge equal in magnitude to the negative charge of the electron. Discovered by physicist Carl Anderson in 1932, the positron plays a crucial role in the field of particle physics and astrophysics. "
  },
  {
   name: "Photons",
   description:
    "Photons are tiny particles that make up light. They have no mass and carry energy in waves. It's like they can act as both waves and tiny particles.",
   description2:
    "Photons are crucial for everything related to light, like what we see and how information is transmitted through things like radio waves or Wi-Fi. They also play a role in interesting things like the photoelectric effect. "
  },
  {
   name: "Protons",
   description:
    "Protons are subatomic particles that play a fundamental role in the structure of atoms. Found in the nucleus of an atom alongside neutrons, protons carry a positive electric charge.",
   description2:
    "This positive charge counterbalances the negative charge of electrons, which orbit the nucleus. Protons, along with neutrons, contribute to the atomic mass of an element. "
  },
  {
   name: "Antiproton",
   description:
    "Antiprotons are subatomic particles that hold a unique place in the realm of particle physics. They are antimatter counterparts to protons, sharing the same mass but possessing opposite charge.",
   description2:
    "Discovered in 1955, antiprotons are produced in high-energy experiments, often involving particle accelerators. "
  },
  {
   name: "Neutron",
   description:
    "Neutrons are subatomic particles that, along with protons, constitute the nucleus of an atom. Unlike protons, neutrons carry no electric charge, making them electrically neutral.",
   description2:
    " Discovered by James Chadwick in 1932, neutrons contribute significantly to the stability of atomic nuclei. Their role in nuclear forces helps overcome the repulsion between positively charged protons, effectively binding the nucleus together. "
  },
  {
   name: "Antineutron",
   description:
    "Antineutrons are antimatter counterparts to neutrons, sharing the same mass but possessing opposite properties. They are classified as baryons, subatomic particles composed of three quarks.",
   description2:
    "In contrast to neutrons, which consist of three quarks—two down quarks and one up quark—antineutrons are composed of antiquarks. The most common configuration includes one antistrange quark and two antiup quarks. "
  },
  {
   name: "Neutrino",

   description:
    "Neutrinos are subatomic particles known for their elusive nature and astonishing ability to interact weakly with matter. Nearly massless and electrically neutral, neutrinos are fundamental constituents of the Standard Model of particle physics.",
   description2:
    " They are generated in various astrophysical processes, such as nuclear reactions within stars and supernovae explosions, and are produced in abundance by the Sun. "
  },
  {
   name: "AntiNeutrinos",

   description:
    "An antineutrino is a subatomic particle that belongs to the family of neutrinos, possessing properties that make it a unique and intriguing element in the particle physics realm.",
   description2:
    " Antineutrinos are nearly massless, electrically neutral, and interact only weakly with matter, allowing them to traverse vast distances without being significantly impeded. Generated in various nuclear reactions, such as those occurring within stars and nuclear reactors, antineutrinos play a pivotal role in our understanding of fundamental particle interactions. "
  }
 ];
 return (
  <>
   <div className="particle-grid">
    {particlesItems.map(({ name, description, description2 }, i) => {
     return(
     <div key={i} className="partice-div" id={`particle${i}`}>
      <h1 className="particle-heading">{name}</h1>
      <p className="particle-description">{description + description2}</p>
     </div>)
    })}
   </div>
   <div className="button-div">
    <button className="button">
     <Link to="/slide/classification">Next page</Link>
    </button>
    <button className="button" onClick={() => setIndex(Index + 1)}>
     <a href={currentSelected}>Next slide</a>
    </button>
   </div>
  </>
 );
};

export default Particles;
