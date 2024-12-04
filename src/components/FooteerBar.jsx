import { Footer } from "flowbite-react";
import React from "react";
import gitHub from "../assets/skills/github.png";
import LinkedIn from "../assets/skills/linkedin.png";
import Netlify from "../assets/skills/netlify.png";
function FooteerBar() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <Footer container>
        <div className="w-full text-center" id="Contact">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
            <Footer.LinkGroup className="flex space-x-6 justify-center sm:justify-end ">
              <Footer.Link
                href="#"
                className="items-center font-extrabold hover:text-blue-400 "
              >
                <a
                  href="https://github.com/VIMALKUMAR23"
                  target="_blank"
                   rel="noopener noreferrer"
                >
                  <img
                    width="20px"
                    src={gitHub}
                    alt="logo"
                    className="inline mr-2 pb-1 "
                  />
                  GitHub
                </a>
              </Footer.Link>
              <Footer.Link
                href="#"
                className=" font-extrabold hover:text-blue-400"
              >
                <a
                  href="https://www.linkedin.com/in/vimal-kumar-892604211"
                  target="_blank"
                   rel="noopener noreferrer"
                >
                  <img
                    width="20px"
                    src={LinkedIn}
                    alt="logo"
                    className="inline mr-2 pb-1"
                  />
                  LinkedIn
                </a>
              </Footer.Link>

              <Footer.Link
                href="#"
                className=" font-extrabold hover:text-blue-400 no-underline  "
              >
                <a
                  href="https://vercel.com/vimals-projects-9d732eae"
                  target="_blank"
                   rel="noopener noreferrer"
                >
                  <img
                    width="20px"
                    src={Netlify}
                    alt="logo"
                    className="inline mr-2 pb-1"
                  />
                  Netlify
                </a>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />

          <Footer.Copyright href="#" by="V-Portfolio" year={currentYear} />
        </div>
      </Footer>
    </div>
  );
}

export default FooteerBar;
