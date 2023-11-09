type Link = {
  url: string;
  name: string;
  icon?: string;
};

const LINKS: Link[] = [
  {
    url: "https://www.linkedin.com/in/jordan-tyrus/",
    name: "LinkedIn",
    icon: "LI-In-Bug.png",
  },
  {
    url: "https://github.com/jtyrus",
    name: "Github",
    icon: "github-mark-white.png",
  },
  {
    url: "https://jordantyrus.com/files/JT_resume.pdf",
    name: "Resume",
    icon: "./pixel.png",
  },
];
export default function () {
  return (
    <section id="links">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Links
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {LINKS.map((link) => (
            <div key={link.name} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"
                  src={link.icon}
                ></img>
                <a
                  className="title-font font-medium text-white w-full h-full"
                  href={link.url}
                >
                  {link.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
