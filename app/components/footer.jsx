// @flow strict
import Link from 'next/link';
import { FaGithub, FaStackOverflow, FaLinkedin, FaFigma, FaDribbble } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abu-said-bd/"
              className="text-[#16f2b3]"
            >
              Gayani Vitharana
            </Link>
          </p>
          <div className="flex items-center gap-5 text-lg">
            {/* GitHub Icon */}
            <Link href="https://github.com/your-username" target="_blank">
              <FaGithub className="hover:text-[#16f2b3] transition-colors" />
            </Link>
            {/* Stack Overflow Icon */}
            <Link href="https://stackoverflow.com/users/your-userid" target="_blank">
              <FaStackOverflow className="hover:text-[#f48024] transition-colors" />
            </Link>
            {/* HackerRank Icon as SVG */}
            <Link href="https://www.hackerrank.com/your-profile" target="_blank">
              <svg
                className="w-5 h-5 fill-current text-[#00ea64] hover:opacity-75 transition-opacity"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.842 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.158 0 256 0zm70.971 361.825l-96-111.998V145.465h56v74.362l74.065 92.565h-34.065zm-171.837 0L156 214.342l52.865-63.758h66.823L156.135 361.825z" />
              </svg>
            </Link>
            {/* LinkedIn Icon */}
            <Link href="https://www.linkedin.com/in/your-profile" target="_blank">
              <FaLinkedin className="hover:text-[#0e76a8] transition-colors" />
            </Link>
            {/* Figma Icon */}
            <Link href="https://www.figma.com/@your-username" target="_blank">
              <FaFigma className="hover:text-[#f24e1e] transition-colors" />
            </Link>
            {/* Dribbble Icon */}
            <Link href="https://dribbble.com/your-profile" target="_blank">
              <FaDribbble className="hover:text-[#ea4c89] transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
