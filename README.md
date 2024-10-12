
# 🧽 Eraser.io Clone

Welcome to the **Eraser.io Clone** project! This is a feature-rich application built to replicate the core functionalities of Eraser.io, using **Next.js**, **React.js**, **Convex**, **Kinde**, and **TailwindCSS**. 🎨

---

## 🔥 Project Overview

This project aims to deliver a fast, intuitive, and visually appealing drawing and collaboration tool, optimized for both desktop and mobile. Our tech stack leverages the **power of React** for dynamic UI updates, **Next.js** for server-side rendering, **Convex** for real-time data, **Kinde** for secure authentication, and **TailwindCSS** for responsive styling.

> **Pro-tip**: We've gone all-in on the Kill Method to keep our code clean and laser-focused on performance! 💥

---

## 📐 Project Structure

Here's a breakdown of the main components and their roles in the project:

| Component         | Description                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------- |
| `frontend`        | Handles the **UI** and **UX** using **React** and **TailwindCSS**.                               |
| `backend`         | Powered by **Next.js** and **Convex**, managing **data syncing** and **real-time** updates.      |
| `auth`            | **Kinde** integration for secure and scalable **authentication**.                                |
| `styles`          | Custom styles using **TailwindCSS** to keep the UI **consistent** and **responsive**.            |

---

## 🚀 Quick Start

Follow these steps to get started with the Eraser.io clone project.

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/eraser-clone.git
   cd eraser-clone
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   Set up environment variables for **Kinde** and **Convex** in `.env.local`:
   ```plaintext
   NEXT_PUBLIC_KINDE_DOMAIN=your-kinde-domain
   NEXT_PUBLIC_CONVEX_URL=your-convex-url
   ```

4. **Run the App**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the app in action.

---

## ⚙️ Core Features

- **Real-time Collaboration**: Powered by **Convex**, allowing users to draw, erase, and edit simultaneously.
- **User Authentication**: Using **Kinde** to manage secure logins and user sessions.
- **Responsive Design**: Optimized for mobile and desktop using **TailwindCSS**.

---

## 🎨 Kill Method in Action

Here's how we implemented the **Kill Method** to keep the project optimized:

1. **Component Splitting**: Dividing UI into reusable, lightweight components to reduce load time.
2. **Efficient State Management**: Utilizing **React Context** to share global state, while minimizing unnecessary re-renders.
3. **Selective Rendering**: Implementing **memoization** and **React.memo** to ensure components update only when necessary.

```javascript
import React, { memo, useContext } from 'react';

const Canvas = memo(() => {
  const { draw, erase } = useContext(CanvasContext);
  
  return (
    <div className="canvas">
      <button onClick={draw}>Draw</button>
      <button onClick={erase}>Erase</button>
    </div>
  );
});

export default Canvas;
```

> **Note**: Memoization helps keep our drawing components as fast as possible!

---

## 🛠️ Tools & Technologies

Here's a list of the main tools and technologies used in this project:

- **Next.js** - Framework for optimized performance and server-side rendering.
- **React.js** - Library for building responsive user interfaces.
- **Convex** - Manages real-time syncing and data storage.
- **Kinde** - Provides authentication and user management.
- **TailwindCSS** - Utility-first CSS framework for designing responsive layouts.

---

## 🎯 Future Improvements

- **Image Uploads**: Add support for importing images into the canvas.
- **Offline Mode**: Enable drawing and syncing data even without internet access.
- **Enhanced Auth**: Support for more third-party providers with Kinde.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Happy Coding! 💻*
