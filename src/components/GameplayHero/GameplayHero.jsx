import "./GameplayHero.css"

// Logos for Marquee
import cppLogo from "../../assets/icons/cplusplus.svg"
import pythonLogo from "../../assets/icons/python.svg"
import reactLogo from "../../assets/icons/react.svg"
import swiftLogo from "../../assets/icons/swift.svg"
import typescriptLogo from "../../assets/icons/typescript.svg"
import javascriptLogo from "../../assets/icons/javascript.svg"
import cssLogo from "../../assets/icons/css.svg"
import electronLogo from "../../assets/icons/electron.svg"
import gitLogo from "../../assets/icons/git.svg"
import githubLogo from "../../assets/icons/github.svg"
import html5Logo from "../../assets/icons/html5.svg"
import luaLogo from "../../assets/icons/lua.svg"
import mongodbLogo from "../../assets/icons/mongodb.svg"
import numpyLogo from "../../assets/icons/numpy.svg"
import pandasLogo from "../../assets/icons/pandas.svg"
import postmanLogo from "../../assets/icons/postman.svg"
import robloxStudioLogo from "../../assets/icons/robloxStudio.svg"
import supabaseLogo from "../../assets/icons/supabase.svg"

function GameplayHero() {
  const marqueeItems = [
    { name: "C++", icon: cppLogo },

    { name: "Python", icon: pythonLogo },
    { name: "Pandas", icon: pandasLogo},
    { name: "NumPy", icon: numpyLogo },
    { name: "Electron", icon: electronLogo},
    
    { name: "HTML5", icon: html5Logo},
    { name: "CSS", icon: cssLogo },
    { name: "JavaScript", icon: javascriptLogo },
    { name: "TypeScript", icon: typescriptLogo },
    { name: "React", icon: reactLogo },

    { name: "Supabase", icon: supabaseLogo },
    { name: "MongoDB", icon:mongodbLogo},
    
    { name: "Roblox Developer", icon: robloxStudioLogo },
    { name: "Lua", icon: luaLogo},
    
    { name: "Git", icon: gitLogo},
    { name: "Postman", icon: postmanLogo},
    { name: "Github", icon: githubLogo },
    
    { name: "Swift", icon: swiftLogo }
  ];

  return (
    <>
      <section className="gameplay-hero">
        <div className="gameplay-marquee">
          <div className="marquee-content">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.name}>
                <img
                  src={item.icon}
                  alt="" 
                  draggable={false}
                  />
                {item.name}
              </span>
            ))}
          </div>

          <div className="marquee-content" aria-hidden="true">
            {marqueeItems.map((item) => (
              <span className="marquee-item" key={item.name}>
                <img
                  src={item.icon}
                  alt="" 
                  draggable={false}
                  />
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