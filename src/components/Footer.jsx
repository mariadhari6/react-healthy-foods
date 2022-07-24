import github from "../assets/GitHub-Mark-120px-plus.png";
const Footer = () => {
  return (
    <div className="absolute left-0 right-0 bottom-0 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; Mar'i Adhari 2022</p>
        </div>
        <a
          href="https://github.com/mariadhari6"
          className="flex items-center w-fit px-2 py-1 text-2xl"
        >
          <img src={github} alt="github" className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
