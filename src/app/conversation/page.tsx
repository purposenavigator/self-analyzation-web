export default function Conversation() {
  return (
    <>
      <div className="h-screen flex flex-col">
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
        <div className="flex flex-1"></div>
        <footer className="text-center text-gray-500 py-6">
          Copyright © 2023 Question Selection App
        </footer>
      </div>
    </>
  );
}
