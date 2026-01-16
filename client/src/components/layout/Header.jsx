function Header({ searchText, onSearchChange }) {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl font-bold text-cyan-500 mb-6">เที่ยวไหนดี</h1>
      <div className="max-w-2xl mx-auto px-4">
        <label htmlFor="search" className="block text-left text-gray-600 mb-1">
          ค้นหาที่เที่ยว
        </label>
        <input
          id="search"
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-cyan-500 focus:outline-none text-center text-gray-700"
        />
      </div>
    </header>
  );
}

export default Header;
