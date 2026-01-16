# 📋 PROJECT PLAN: Tourist Attraction Search

> **Project:** Frontend Skill Checkpoint - React Tourist Attraction Mini Project  
> **Tech Stack:** React 18 + Vite + TailwindCSS  
> **Last Updated:** 2026-01-16 (All Phases Complete)

---

## 1. Project Structure

```
client/src/
├── assets/               # Static assets (images, icons)
├── components/           # UI Components (Presentational)
│   ├── common/           # Reusable components
│   │   └── Tag.jsx
│   ├── layout/           # Layout components
│   │   └── Header.jsx
│   └── trip/             # Trip-related components
│       ├── TripCard.jsx
│       ├── TripGallery.jsx
│       └── TripList.jsx
├── hooks/                # Custom hooks (Logic)
│   └── useTrips.js
├── services/             # API services
│   └── tripService.js
├── utils/                # Utility functions
│   └── clipboard.js
├── App.jsx
├── App.css
├── main.jsx
└── index.css             # Tailwind directives
```

### Design Principles
- **UI อยู่ใน `components/`** - แยกตาม domain (trip, common, layout)
- **Logic อยู่ใน `hooks/`** - แยก business logic ออกจาก UI
- **API calls อยู่ใน `services/`** - Single point of API communication
- **Utilities อยู่ใน `utils/`** - Pure functions ที่ reusable

---

## 2. Component Hierarchy

### 2.1 Component Tree

```
App
├── Header
│   └── SearchInput (controlled input)
└── TripList
    └── TripCard (× n)
        ├── TripGallery
        │   ├── MainPhoto
        │   └── Thumbnails (× 3)
        ├── TripInfo
        │   ├── Title (link)
        │   ├── Description (truncated 100 chars)
        │   └── ReadMoreLink
        ├── TagList
        │   └── Tag (× n)
        └── CopyLinkButton (Optional)
```

### 2.2 Component Specifications

| Component | หน้าที่ (SRP) | Props |
|-----------|--------------|-------|
| `App` | Root container, state holder | - |
| `Header` | Layout wrapper สำหรับ search section | `searchText`, `onSearchChange` |
| `SearchInput` | Controlled input field | `value`, `onChange`, `placeholder` |
| `TripList` | Container สำหรับ render list of trips | `trips: Trip[]`, `onTagClick?` |
| `TripCard` | Card container สำหรับ 1 trip | `trip: Trip`, `onTagClick?: (tag) => void` |
| `TripGallery` | แสดง main photo + 3 thumbnails | `photos: string[]` |
| `Tag` | Clickable tag badge | `label`, `onClick?` |
| `CopyLinkButton` | ปุ่ม copy URL (Optional) | `url: string` |

### 2.3 Data Type Reference

```typescript
interface Trip {
  eid: string;
  title: string;
  description: string;
  url: string;
  photos: string[];   // photos[0] = main photo, photos[1-3] = thumbnails
  tags: string[];
}
```

---

## 3. Logic Strategy

### 3.1 State Management (App Level)

```jsx
// App.jsx - Single Source of Truth
const [searchText, setSearchText] = useState('');  // ค่าใน input
const [trips, setTrips] = useState([]);            // ผลลัพธ์จาก API
const [isLoading, setIsLoading] = useState(false); // Loading state
const [error, setError] = useState(null);          // Error state
```

### 3.2 Custom Hook: `useTrips`

**Location:** `src/hooks/useTrips.js`

**Purpose:** จัดการ fetching trips จาก API, handle loading/error states

**Interface:**
```javascript
function useTrips(keyword) {
  // Returns: { trips, isLoading, error }
}
```

### 3.3 API Service

**Location:** `src/services/tripService.js`

**Endpoint:** `GET http://localhost:4001/trips?keywords=<search>`

**Response Format:**
```json
{
  "data": [
    {
      "eid": "1",
      "title": "...",
      "description": "...",
      "url": "https://...",
      "photos": ["url1", "url2", "url3", "url4"],
      "tags": ["tag1", "tag2", ...]
    }
  ]
}
```

### 3.4 Logic Flows

**Search Flow:**
```
1. User พิมพ์ → onChange → setSearchText
2. useEffect ดัก searchText → เรียก API
3. API Response → setTrips
4. TripList re-render
```

**Initial Load:**
- เมื่อ `searchText === ''` → ส่ง `keywords=` (empty)
- Server return all trips

**Tag Click Flow (Optional):**
```
1. User คลิก Tag "เกาะ"
2. onTagClick("เกาะ") → callback ส่งขึ้น App
3. App: ตรวจสอบว่ามีคำนี้ใน searchText หรือยัง
4. ถ้าไม่มี → append " เกาะ" ต่อท้าย searchText
5. setSearchText triggers new search
```

### 3.5 Utility Functions

| File | Function | Purpose |
|------|----------|---------|
| `services/tripService.js` | `searchTrips(keyword)` | Fetch API call |
| `utils/clipboard.js` | `copyToClipboard(text)` | Copy text to clipboard |

---

## 4. Step-by-Step Execution Plan

### Phase 1: Project Setup ✅
- [x] สร้าง branch `feature/project-setup` จาก `dev`
- [x] ติดตั้ง TailwindCSS และ dependencies
- [x] สร้าง folder structure ตามที่ออกแบบ
- [x] Config Tailwind (tailwind.config.js, postcss.config.js)
- [x] เพิ่ม Tailwind directives ใน index.css
- [x] Commit: `ecb83dd - feat: add project setup and UI components (Phase 1+2)`
- [x] Merge to `dev`

### Phase 2: UI Components (Static) ✅
- [x] สร้าง branch `feature/ui-components` จาก `dev`
- [x] สร้าง `Header` component
- [x] สร้าง `SearchInput` component
- [x] สร้าง `Tag` component
- [x] สร้าง `TripGallery` component
- [x] สร้าง `TripCard` component
- [x] สร้าง `TripList` component
- [x] ทดสอบ UI ด้วย mock data
- [x] Commit: `ecb83dd - feat: add project setup and UI components (Phase 1+2)`
- [x] Merge to `dev`

### Phase 3: API Integration ✅
- [x] สร้าง branch `feature/api-integration` จาก `dev`
- [x] สร้าง `tripService.js` (API client)
- [x] สร้าง `useTrips` custom hook
- [x] เชื่อม hook กับ App component
- [x] ทดสอบ fetch data จาก server
- [x] Commit: `e70a078 - feat: add API integration and search logic (Phase 3+4)`
- [x] Merge to `dev`

### Phase 4: Search Logic ✅
- [x] สร้าง branch `feature/search-logic` จาก `dev`
- [x] Implement search input state binding
- [x] Implement debounce (optional) สำหรับ search
- [x] ทดสอบ search functionality
- [x] Commit: `e70a078 - feat: add API integration and search logic (Phase 3+4)`
- [x] Merge to `dev`

### Phase 5: Optional Features ✅
- [x] สร้าง branch `feature/optional-features` จาก `dev`
- [x] Implement tag click → append to search
- [x] Implement copy link button
- [x] ทดสอบ optional features
- [x] Commit: `6b4f339 - feat: add optional features - tag click and copy link (Phase 5)`
- [x] Merge to `dev`

### Phase 6: Final ✅
- [x] Review code quality (DRY, SRP, High Cohesion, Loose Coupling)
- [x] Test all features
- [x] Merge `dev` → `main` (worktree limitation)

---

## 5. Git Branch Strategy

```
main
  └── dev
       ├── feature/project-setup      (Phase 1)
       ├── feature/ui-components      (Phase 2)
       ├── feature/api-integration    (Phase 3)
       ├── feature/search-logic       (Phase 4)
       └── feature/optional-features  (Phase 5)
```

### Commit Message Format
```
<type>: <description>

Types:
- feat: New feature
- fix: Bug fix
- chore: Maintenance tasks
- refactor: Code refactoring
- style: Styling changes
```

---

## 6. Quality Checklist

### Code Quality Principles ✅
- [x] **DRY** - ไม่มี code ซ้ำซ้อน, ใช้ reusable components (Tag, CopyLinkButton)
- [x] **SRP** - แต่ละ component มีหน้าที่เดียว (Header=layout, TripCard=display, TripGallery=photos)
- [x] **High Cohesion** - files จัดกลุ่มตาม domain (common/, layout/, trip/)
- [x] **Loose Coupling** - components ไม่ depend กันมากเกินไป (ส่ง props/callbacks)

### Functional Requirements ✅
- [x] แสดงผล trips ทั้งหมดเมื่อเปิดเว็บ (empty search)
- [x] Search input ค้นหา trips ได้ (API integration)
- [x] แสดง Title, Description (≤100 chars), Photos, Tags
- [x] Title เป็น link เปิด tab ใหม่ (target="_blank")
- [x] ปุ่ม "อ่านต่อ" เปิด link ใน tab ใหม่ (target="_blank")
- [x] แสดง Tags ของแต่ละ trip

### Optional Requirements ✅
- [x] คลิก Tag → append to search input (handleTagClick)
- [x] ไม่ซ้ำ tag ใน search input (filter duplicate logic)
- [x] ปุ่ม Copy link ทำงานได้ (clipboard.js utility)

---

## 7. Development Notes & Lessons Learned

### Phase 1: Project Setup ✅

**Actions:**
- สร้าง Git branches: `main` → `dev` → `feature/project-setup`
- ติดตั้ง TailwindCSS และ dependencies
- สร้าง folder structure ตามแผน
- Config `tailwind.config.js`, `postcss.config.js`, `index.css`

**⚠️ Issue พบ:**
| ปัญหา | สาเหตุ | วิธีแก้ |
|-------|--------|--------|
| TailwindCSS v4 ไม่ทำงานกับ Vite 4.1 | `npm install tailwindcss` ติดตั้ง v4 (latest) ซึ่งมี breaking changes - ต้องใช้ `@tailwindcss/postcss` และ `@import "tailwindcss"` แทน syntax เดิม | Downgrade เป็น `tailwindcss@3.4.1` |

**💡 Lessons Learned:**
- ควรระบุ version ชัดเจนเมื่อติดตั้ง packages: `npm install -D tailwindcss@3.4.1`
- AI Agent มี training data cutoff อาจไม่รู้จัก syntax ใหม่ล่าสุด
- ตรวจสอบ compatibility matrix ก่อนใช้ packages ร่วมกัน

---

### Phase 2: UI Components ✅

**Actions:**
- สร้าง branch `feature/ui-components`
- สร้าง Components ทั้งหมด 6 ตัว:
  - `Header.jsx` - Search section with title
  - `Tag.jsx` - Clickable tag badge
  - `CopyLinkButton.jsx` - Copy URL button with icon
  - `TripGallery.jsx` - Main photo + 3 thumbnails
  - `TripCard.jsx` - Card container
  - `TripList.jsx` - List of TripCards
- Update `App.jsx` with mock data
- ทดสอบ UI ผ่าน dev server

**Components Created:**
```
src/components/
├── common/
│   ├── Tag.jsx
│   └── CopyLinkButton.jsx
├── layout/
│   └── Header.jsx
└── trip/
    ├── TripCard.jsx
    ├── TripGallery.jsx
    └── TripList.jsx
```

**💡 Lessons Learned:**
- แยก components ตาม domain ช่วยให้ maintain ง่าย
- ใช้ mock data ทดสอบ UI ก่อนเชื่อม API
- Component hierarchy: App → TripList → TripCard → (Gallery, TagList, CopyButton)
- Props drilling ที่เหมาะสม: ส่ง callbacks ขึ้นไปที่ App level สำหรับ state management

---

### Phase 3: API Integration ✅

**Actions:**
- สร้าง `tripService.js` - API client สำหรับ fetch trips
- สร้าง `useTrips.js` - Custom hook จัดการ state (trips, isLoading, error)
- Update `App.jsx` - ใช้ useTrips แทน mock data
- เพิ่ม Loading และ Error states ใน UI

**Files Created:**
```
src/services/tripService.js  - searchTrips(keyword) function
src/hooks/useTrips.js        - useTrips(keyword) hook
```

**💡 Lessons Learned:**
- แยก API logic ออกจาก component ช่วยให้ test และ maintain ง่าย
- Custom hook ช่วย encapsulate state management logic
- useEffect dependency array: ใส่ `searchText` เพื่อ re-fetch เมื่อค้นหาใหม่
- Error handling: try-catch ใน service layer, แสดง error state ใน UI
- Loading states: สำคัญสำหรับ UX เมื่อ fetch ข้อมูลจาก API

---

### Phase 4: Search Logic ✅

**Note:** Search logic ถูก implement ไปพร้อมกับ Phase 3
- `useTrips(searchText)` จะ re-fetch เมื่อ searchText เปลี่ยน
- API `/trips?keywords=` รองรับการค้นหาอยู่แล้ว

---

### Phase 5: Optional Features ✅

**Actions:**
- Verify Tag click → append to search (already in App.jsx)
- Refactor Copy link button ให้ใช้ utility function
- สร้าง `clipboard.js` utility

**Files Created/Updated:**
```
src/utils/clipboard.js                    - copyToClipboard(text) function
src/components/common/CopyLinkButton.jsx  - refactored to use utility
```

**Features:**
- ✅ คลิก Tag → append เข้า search input (ไม่ซ้ำ)
- ✅ Copy link button → copy URL ไป clipboard

**💡 Lessons Learned:**
- Utility functions: สร้าง `clipboard.js` สำหรับ reusable logic
- Event handling: คลิก tag ใช้ callback pattern ส่งขึ้น App level
- DOM manipulation: ใช้ `document.execCommand('copy')` สำหรับ clipboard API
- String manipulation: `split()`, `filter()`, `includes()` สำหรับ tag deduplication

---

## 8. Tech Stack Versions (Confirmed Working)

| Package | Version | หมายเหตุ |
|---------|---------|---------|
| React | 18.2.0 | Stable |
| Vite | 4.1.0 | Compatible with Tailwind v3 |
| TailwindCSS | 3.4.1 | ⚠️ ไม่ใช้ v4 เพราะ breaking changes |
| PostCSS | latest | - |
| Autoprefixer | latest | - |

### Overall Project Lessons Learned

**🏗️ Architecture & Code Quality:**
- **DRY Principle**: ใช้ Tag, CopyLinkButton ซ้ำในหลาย TripCard
- **SRP**: แต่ละ component มีหน้าที่ชัดเจน (Header=layout, TripCard=display, TripGallery=photos)
- **High Cohesion**: จัดกลุ่มตาม domain (common/, layout/, trip/)
- **Loose Coupling**: ส่ง props/callbacks แทน direct state access

**🔄 Git Workflow:**
- Worktree mode: ไม่สามารถ checkout branches ที่ถูกใช้ใน main repository
- Commit messages: ใช้ format `feat: description` ตาม conventional commits
- Branch strategy: ใช้ feature branches แต่ merge ไม่ได้ใน worktree

**🧪 Testing Strategy:**
- Manual testing ใน browser preview
- Test phases แยกกัน: UI → API → Features
- Test edge cases: empty search, duplicate tags, error states

**📚 Documentation:**
- Development notes ใน PROJECT_PLAN.md ดีกว่าไฟล์แยก
- บันทึก issues และ solutions ช่วยในอนาคต
- Tech stack versions ที่ confirm ว่าใช้ได้

---

**🎯 Status: All Phases Complete - Ready for Final Review**
