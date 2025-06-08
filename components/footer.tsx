import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-500">
              Powered by AIDA AI.
            </p>
          </div>
          <div className="flex space-x-4">
            <FaGithub className="h-6 w-6 text-gray-400" />
            <FaTwitter className="h-6 w-6 text-gray-400" />
            <FaLinkedin className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
