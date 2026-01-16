<<<<<<< C:\Users\SheepHorror\TechUp\Checkpoint\react-tourist-attraction-mini-project\client\src\App.jsx
<<<<<<< C:\Users\SheepHorror\TechUp\Checkpoint\react-tourist-attraction-mini-project\client\src\App.jsx
import "./App.css";

function App() {
  return <div className="App">{/* Start coding here */}</div>;
=======
=======
>>>>>>> c:\Users\SheepHorror\.windsurf\worktrees\react-tourist-attraction-mini-project\react-tourist-attraction-mini-project-8c8e4d95\client\src\App.jsx
import { useState } from 'react';
import "./App.css";
import Header from './components/layout/Header';
import TripList from './components/trip/TripList';
<<<<<<< C:\Users\SheepHorror\TechUp\Checkpoint\react-tourist-attraction-mini-project\client\src\App.jsx

const mockTrips = [
  {
    eid: "1",
    title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description: "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  },
  {
    eid: "2",
    title: "ลัดเลาะ 10 ที่เที่ยวย่าน BTS สายสีเขียว",
    url: "https://www.wongnai.com/trips/new-bts-route-trips",
    description: "BTS สายสีเขียวเปิดให้บริการเพิ่ม 5 สถานีทั้งที งานนี้ต้องไม่มีพลาด รีบไปอัปเดต เช็กอินที่เที่ยวคูล ๆ ไปได้ง่ายก่อนใคร",
    photos: [
      "https://img.wongnai.com/p/1600x0/2020/02/18/458b9a31b62b408d91137fbe152f7450.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/08bca1c784db4d7f92e93656b5376681.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/95bd2ca371e24436bcb24d432a86836c.jpg",
      "https://img.wongnai.com/p/1600x0/2020/02/18/68289e188ea54e00b5e9d806cfd0fc54.jpg",
    ],
    tags: ["คาเฟ่", "ร้านกาแฟ", "จุดถ่ายรูป", "เที่ยวใกล้กรุง", "กรุงเทพมหานคร"],
  },
];

function App() {
  const [searchText, setSearchText] = useState('');
  const [trips] = useState(mockTrips);
=======
import useTrips from './hooks/useTrips';

function App() {
  const [searchText, setSearchText] = useState('');
  const { trips, isLoading, error } = useTrips(searchText);
>>>>>>> c:\Users\SheepHorror\.windsurf\worktrees\react-tourist-attraction-mini-project\react-tourist-attraction-mini-project-8c8e4d95\client\src\App.jsx

  const handleSearchChange = (value) => {
    setSearchText(value);
  };

  const handleTagClick = (tag) => {
    const currentTags = searchText.trim().split(' ').filter(Boolean);
    if (!currentTags.includes(tag)) {
      setSearchText((prev) => (prev ? `${prev} ${tag}` : tag));
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header searchText={searchText} onSearchChange={handleSearchChange} />
      <main>
<<<<<<< C:\Users\SheepHorror\TechUp\Checkpoint\react-tourist-attraction-mini-project\client\src\App.jsx
        <TripList trips={trips} onTagClick={handleTagClick} />
      </main>
    </div>
  );
>>>>>>> c:\Users\SheepHorror\.windsurf\worktrees\react-tourist-attraction-mini-project\react-tourist-attraction-mini-project-8c8e4d95\client\src\App.jsx
=======
        {isLoading && (
          <div className="text-center text-gray-500 py-8">กำลังโหลด...</div>
        )}
        {error && (
          <div className="text-center text-red-500 py-8">เกิดข้อผิดพลาด: {error}</div>
        )}
        {!isLoading && !error && (
          <TripList trips={trips} onTagClick={handleTagClick} />
        )}
      </main>
    </div>
  );
>>>>>>> c:\Users\SheepHorror\.windsurf\worktrees\react-tourist-attraction-mini-project\react-tourist-attraction-mini-project-8c8e4d95\client\src\App.jsx
}

export default App;
