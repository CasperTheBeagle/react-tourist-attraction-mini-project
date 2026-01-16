# 🌴 React Tourist Attraction Search

> **Frontend Skill Checkpoint Project** - React 18 + Vite + TailwindCSS

## 📋 โครงการนี้คืออะไร?

เว็บแอปพลิเคชันสำหรับค้นหาสถานที่ท่องเที่ยวในประเทศไทย พัฒนาด้วย React และเชื่อมต่อกับ API server

## 🚀 Features

### ✅ Core Features
- 🔍 **ค้นหาสถานที่ท่องเที่ยว** ด้วย keywords
- 📸 **แสดงรูปภาพ** (main photo + 3 thumbnails)
- 🏷️ **แสดง tags** ของแต่ละสถานที่
- 🔗 **ลิงก์ไปยังบทความ** (เปิด tab ใหม่)
- 📖 **ปุ่มอ่านต่อ** (เปิด tab ใหม่)

### ✅ Optional Features
- 🏷️ **คลิก tag** → เพิ่มคำค้นหา (ไม่ซ้ำ)
- 📋 **Copy link** → คัดลอก URL ไป clipboard

## 🛠️ Tech Stack

| Technology | Version | หมายเหตุ |
|-------------|---------|---------|
| **React** | 18.2.0 | UI Framework |
| **Vite** | 4.1.0 | Build Tool |
| **TailwindCSS** | 3.4.1 | CSS Framework |
| **PostCSS** | latest | CSS Processing |
| **Autoprefixer** | latest | CSS Compatibility |

## 📁 Project Structure

```
client/src/
├── components/           # UI Components
│   ├── common/           # Reusable (Tag, CopyLinkButton)
│   ├── layout/           # Layout (Header)
│   └── trip/             # Trip-related (TripCard, TripGallery, TripList)
├── hooks/                # Custom Hooks (useTrips)
├── services/             # API Services (tripService)
├── utils/                # Utilities (clipboard)
└── App.jsx               # Root Component
```

## 🏗️ Architecture Principles

- **DRY** - ใช้ components ซ้ำ (Tag, CopyLinkButton)
- **SRP** - แต่ละ component มีหน้าที่เดียว
- **High Cohesion** - จัดกลุ่มตาม domain
- **Loose Coupling** - ส่ง props/callbacks

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm 8+

### Installation

1. **Clone repository**
```bash
git clone https://github.com/CasperTheBeagle/react-tourist-attraction-mini-project.git
cd react-tourist-attraction-mini-project
```

2. **Install server dependencies**
```bash
cd server
npm install
npm start
```

3. **Install client dependencies**
```bash
cd client
npm install
npm run dev
```

4. **Open browser**
- Frontend: http://localhost:5173 (หรือ port ที่ Vite กำหนด)
- Backend API: http://localhost:4001

## 📊 API Endpoints

### Search Trips
```
GET http://localhost:4001/trips?keywords=<search_term>
```

**Response:**
```json
{
  "data": [
    {
      "eid": "1",
      "title": "คู่มือเที่ยวเกาะช้าง...",
      "url": "https://...",
      "description": "...",
      "photos": ["url1", "url2", "url3", "url4"],
      "tags": ["เกาะ", "ทะเล", "จุดชมวิว"]
    }
  ]
}
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] แสดง trips ทั้งหมดเมื่อเปิดเว็บ
- [ ] ค้นหาด้วย keywords ได้
- [ ] คลิก title/link เปิด tab ใหม่
- [ ] คลิก tag เพิ่มคำค้นหา
- [ ] Copy link ทำงานได้

## 📝 Development Journey

ดูรายละเอียดการพัฒนาทั้งหมดใน [`PROJECT_PLAN.md`](PROJECT_PLAN.md)

### Git Commits
```
ecb83dd - feat: add project setup and UI components (Phase 1+2)
e70a078 - feat: add API integration and search logic (Phase 3+4)
6b4f339 - feat: add optional features - tag click and copy link (Phase 5)
59af710 - docs: add comprehensive lessons learned
```

## 🎯 Project Status

✅ **All Phases Complete**
- Phase 1: Project Setup ✅
- Phase 2: UI Components ✅
- Phase 3: API Integration ✅
- Phase 4: Search Logic ✅
- Phase 5: Optional Features ✅

## 👨‍💻 Authors

- **CasperTheBeagle** - *Initial work* - [GitHub](https://github.com/CasperTheBeagle)

## 📄 License

This project is for educational purposes as part of Frontend Skill Checkpoint.

---

**🚀 Project ready for review and submission!**
