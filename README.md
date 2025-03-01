# React Guide

## Setting Up a React Project

```sh
npm create vite@latest project-name
```

Choose: `react -> javascript -> npm i -> npm run dev`

### Project Cleanup

- Remove all default CSS in `app.css` and `index.css`
- From `main.jsx`, remove `<App/>` and add router configuration below

### 📂 Project Structure

```
src/
│── components/
│   ├── Header.js
│   ├── Sidebar.js
│   ├── MasterLayout.js
│── pages/
│   ├── Home.js
│   ├── About.js
│   ├── Contact.js
│── App.js
│── index.js
```

---

## Adding a New Stylesheet to a Component

```js
import "./LoginStyle.css";
```

## React Router (Important Imports)

```js
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
  useLocation,
  useNavigate,
  Router,
  Routes,
  Route,
} from "react-router-dom";
```

## MasterLayout + Pages

### `main.js`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Masterlayout from "./Masterlayout.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <h1>Welcome</h1>, errorElement: <h1>404</h1> },
  { path: "/login", element: <h1>Login page</h1> },
  { path: "/signup", element: <h1>Signup Page</h1> },
  {
    path: "/admin",
    element: <Masterlayout />, // Admin layout
    children: [
      { path: "profile", element: <h1>Admin Profile</h1> },
      { path: "post", element: <h1>Admin Post</h1> },
      {
        path: "friends",
        children: [{ path: "close", element: <h1>Close Friends</h1> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
```

---

## Another Way of Creating Above Routes

```html

  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<h1>Welcome</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/admin" element={<Masterlayout />}>
          <Route path="post" element={<h1>Post</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="friends">
            <Route path="close" element={<h1>Close Friends</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>

```

## MasterLayout Component

### `MasterLayout.js`

```jsx
import React, { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Masterlayout() {
  const loc = useLocation();

  useEffect(() => {
    console.log(loc);
  }, []);

  return (
    <div style={{ border: "1px solid red" }}>
      <div>
        <h5>Sidebar Component</h5>
        <Link to="/admin/post">Post</Link>
      </div>
      <div>
        <h5>Header Component</h5>
        <Link to="/admin/profile">Profile</Link>
      </div>
      <div>
        <h5>Close Friends</h5>
        <Link to="/admin/friends/close">Close Friends</Link>
      </div>
      <Outlet />
    </div>
  );
}
export default Masterlayout;
```

---

## Passing State with Links

### Passing State from Element on Link Click

```jsx
<Link to="/profile" state={{ userId: 123, from: "Home" }}>
```

### Getting State in Navigated Component

```js
const location = useLocation();
const userData = location.state; // Getting the state data
```

### Passing State Programmatically

```js
const navigate = useNavigate();

const goToProfile = () => {
  navigate("/profile", {
    state: { userId: 123, from: "Home Page" },
  });
};
```

---

## Hooks and Usage

### `useRef`

- Direct DOM manipulation (`ref.current.focus()`)
- Store values across renders without triggering a re-render
- Track previous values

#### 1. current

- Description: This is the primary property of the ref object, and it gives you access to the DOM node itself. It holds the actual reference to the element.
  - Example: ref.current will return the div element itself, and you can access its properties and methods.

Common Properties and Methods You Can Access via ref.current:

#### 2. DOM Element Properties

These properties can give you information about the element or control its layout and appearance.

- ref.current.clientWidth
  - Description: Returns the width of the div excluding borders, margins, and padding. It’s useful for measuring the element's content area width.
- ref.current.clientHeight
  - Description: Returns the height of the div excluding borders, margins, and padding.
- ref.current.offsetWidth
  - Description: Returns the total width of the div including borders and padding but excluding margins.
- ref.current.offsetHeight
  - Description: Returns the total height of the div including borders and padding but excluding margins.
- ref.current.scrollWidth
  - Description: Returns the width of the div, including the content not visible on the screen (in case the content overflows and is scrollable).
- ref.current.scrollHeight
  - Description: Returns the height of the div, including the content that may not be visible (in case of vertical scrolling).
- ref.current.scrollTop
  - Description: Returns the number of pixels the div is scrolled vertically from the top. Can be useful for infinite scrolling or scroll tracking.
- ref.current.scrollLeft
  - Description: Returns the number of pixels the div is scrolled horizontally from the left.
- ref.current.style
  - Description: Provides access to the inline styles of the element (can be used to read or modify styles directly).
- ref.current.dataset
  - Description: Returns an object with all the data attributes (e.g., data-id, data-name) associated with the div.

#### 3. DOM Element Methods

These methods can be used to manipulate or query the DOM element.

- ref.current.focus()
  - Description: Focuses the div element, if it can be focused (e.g., it has a tabindex or is an interactive element like an input).
- ref.current.blur()
  - Description: Removes focus from the div element.
- ref.current.click()
  - Description: Triggers a click event programmatically on the div (useful if you want to simulate user interaction).
- ref.current.scrollIntoView()
  - Description: Scrolls the div into view if it's out of the viewport. This can be customized with options like smooth scrolling.
- ref.current.getBoundingClientRect()
  - Description: Returns an object containing the div's position and size relative to the viewport (including top, left, width, height, etc.).
- ref.current.addEventListener()
  - Description: Adds an event listener to the div for a specified event (e.g., click, scroll).
- ref.current.removeEventListener()
  - Description: Removes an event listener from the div.

#### 4. ref.current.classList

- Description: Provides access to the classList property, which is an API for manipulating the element's classes.
  - Methods: add(), remove(), toggle(), contains(), etc.
  - Example: ref.current.classList.add("active"); will add the active class to the div.

#### 5. ref.current.innerHTML

- Description: Allows reading or modifying the HTML content inside the div.
- ref.current.innerText
  - Description: Returns the visible text content inside the div.
- ref.current.textContent
  - Description: Similar to innerText but includes hidden text, including from hidden elements like `<style>` tags.

#### 6. ref.current.dataset

- Description: Allows you to access data attributes (e.g., data- attributes) attached to the div. This is useful for storing extra information about the element.
  - Example: ref.current.dataset.myCustomData will retrieve the value of data-my-custom-data if it’s set on the div.

#### 7. ref.current.contentEditable

- Description: Returns a boolean value or a string indicating whether the div is editable. You can also modify it to make the div content editable.
  - Example: ref.current.contentEditable = true makes the div editable by the user.

#### 8. ref.current.dir

- Description: Gets or sets the text direction for the div. This can be useful for handling right-to-left (RTL) or left-to-right (LTR) text content.

### `useReducer`

- When state update logic is complex
- When state updates depend on the previous state
- Easy for data management

### `useContext`

- Share states across nested components without props drilling
- Share common app data like theme, user details

### `useMemo`

- Optimize performance by memoizing computed values
- Prevent expensive recalculations on every render

### `useCallback`

- Memoize a function to maintain reference stability across renders

### `useLayoutEffect`

- Runs synchronously after DOM mutations and before the browser paints
- Useful for measuring DOM elements before rendering

---

## Handling Form Data

```js
function submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, psw } = Object.fromEntries(formData.entries());
    ......
}
```

## Debouncing Search

```jsx
import { useState, useEffect, useCallback } from "react";

function handleSearch(search) {
    setQueryParams({ ...queryParams, search });
    console.log({ search });
}

const debouncedHandleSearch = useCallback(debounce(handleSearch, 300), []);

<Input onChange={(e) => {
    debouncedHandleSearch(e.target.value);
}}>
```

---

## Sample Interview Implementation Questions

- Create a simple counter component with increment and decrement buttons.
- Build a todo list app with add, complete, and delete functionalities.
- Implement a modal component with open/close functionality.
- Create a search filter component that filters a list of items dynamically.
- Build a form with email and password fields, implementing validation.
- Pass data from a parent to a child component and update it from the child.
- Implement pagination with "Previous" and "Next" buttons.
- Fetch data from an API and display a loading indicator.
- Implement conditional rendering based on a boolean state.
- Update the document title dynamically based on component state.

---
