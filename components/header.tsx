import { MdRestaurantMenu } from "react-icons/md";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MdRestaurantMenu className="h-8 w-8 text-gray-800" />
            <span className="text-2xl font-bold text-gray-800">PicMenu.co</span>
          </div>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100"
            href="https://aidabot.club"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>AIDA AI</p>
          </a>
        </div>
      </div>
    </header>
  );
}
