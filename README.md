# GadgetHeaven

---

**Live Website:**  https://gadgetheaven71.netlify.app/

**Requirement Document:** https://github.com/Samadsust71/assignment-requirements/blob/main/Batch-10_Assignment-08-.pdf

---

## 📜 Project Description

**GadgetHaven** is a sleek and user-friendly e-commerce platform designed to make gadget shopping easy, personalized, and enjoyable. With a variety of gadgets including laptops, smartphones, accessories, and wearables, GadgetHaven offers a tailored shopping experience for tech enthusiasts. Users can browse categories, view detailed product information, manage their cart and wishlist, and sort items based on their preferences.

## ⚛️ React Fundamentals

This project utilizes several fundamental React concepts:

1. **Components**: Modular structure with reusable components for scalability.
2. **React Router**: For seamless navigation between pages and routes.
3. **State Management**: Local state in components and global state with Context API for efficient data flow.
4. **`useEffect`**: For handling side effects, especially data loading and page updates.
5. **`useState`**: For storing whether the user has already been greeted.
6. **`useNavigate`**: To navigate to different pages (for example, when the user clicks a link or button).
7. **`useLocation`**: To access the current URL or location the user is at (useful if you need to track or display the page they are on).
8. **Conditional Rendering**: Displaying messages, lists, or UI elements based on state conditions.

## 📊 Data Management

To handle data across different pages and ensure persistence, **Context API** and **Local Storage** are used:

- **Context API**: Manages global state for cart and wishlist items, making it easy to access and modify from any component.
- **Local Storage**: Ensures data like cart items and wishlist persist between page reloads, and stores user email to personalize the user experience.

## 🔑 Key Features

1. **Detailed Product Pages**: Each product has a dedicated page with comprehensive details, including specifications, price, rating, and availability.
2. **Shopping Cart and Wishlist**: Users can add items to their cart and wishlist, with visual indicators in the navbar to show the number of items.
3. **Dynamic Category Sidebar**: Easy navigation through different gadget categories like laptops, phones, and accessories for quick product browsing.
4. **User Welcome Message**: If a returning user has their email saved, a personalized welcome message is displayed on the About page.
5. **Sort and Filter**: Sort cart items by price, manage cart items, and view totals for easy and organized shopping.
