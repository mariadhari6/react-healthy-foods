import GitHubButton from "react-github-btn";
const Footer = () => {
  return (
    <div className="absolute left-0 right-0 bottom-0 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; Mar'i Adhari 2022</p>
        </div>
        <GitHubButton
          href="https://github.com/mariadhari6/react-healthy-foods"
          data-icon="octicon-star"
          aria-label="Star mariadhari6/react-healthy-foods on GitHub"
          data-show-count
          data-size="large"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  );
};
export default Footer;
