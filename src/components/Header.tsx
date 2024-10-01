const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between">
      <div className="text-lg font-bold">Question Selection</div>
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-600">
          Select Question
        </a>
        <a href="#" className="text-gray-600">
          Conversation History
        </a>
        <a href="#" className="text-gray-600">
          Profile
        </a>
      </nav>
      <div>
        <input
          type="text"
          placeholder="Search in site"
          className="border p-2 rounded"
        />
      </div>
    </header>
  );
};

export default Header;
