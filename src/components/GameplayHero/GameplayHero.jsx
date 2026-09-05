import "./GameplayHero.css";
import cppLogo from "../../assets/icons/cplusplus.svg"
import pythonLogo from "../../assets/icons/python.svg"
import reactLogo from "../../assets/icons/react.svg"
import swiftLogo from "../../assets/icons/swift.svg"
import typescriptLogo from "../../assets/icons/typescript.svg"
import javascriptLogo from "../../assets/icons/javascript.svg"

function GameplayHero() {
  const marqueeItems = [
    { name: "C++", icon: cppLogo },
    { name: "Python", icon: pythonLogo },
    { name: "React", icon: reactLogo },
    { name: "Swift", icon: swiftLogo },
    { name: "TypeScript", icon: typescriptLogo },
    { name: "JavaScript", icon: javascriptLogo },
  ];

  return (
    <>
      <section className="gameplay-hero">
        <div className="gameplay-marquee">
          <div className="marquee-content">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.name}>
                <img src={item.icon} alt="" />
                {item.name}
              </span>
            ))}
          </div>

          <div className="marquee-content" aria-hidden="true">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.name}>
                <img src={item.icon} alt="" />
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        className="gameplay-window"
        style={{ backgroundImage: `url("https://placehold.co/200")` }}
      />
    </>
  );
}

export default GameplayHero;