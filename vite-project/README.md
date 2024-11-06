Online Library System:-
Github link:-
https://github.com/Amaresh20/book-app

Online Library System:-

This Online Library System is a React application for managing a virtual library. Users can add, view, and browse books by categories, with search functionality and detailed views for each book.

Features:-
Browse books by category
Search by book title or author
Add new books with detailed information
View book details

Prerequisites:-
Node.js (v14 or higher)
npm (Node Package Manager)

1. Clone the repository
   First, clone this repository to your local machine:

git clone:-
https://github.com/Amaresh20/book-app.git

cd book-app

2. Install dependencies
   Install the necessary dependencies by running:

npm install

3. Start the development server
   Run the following command to start the Vite development server:

npm run dev

The app will automatically open in your browser at http://localhost:5173

File Structure:-
online-library-system/
├── public/
│ ├── index.html
│ └── favicon.ico
├── src/
│ ├── assets/
│ │ └── images/ # Images and icons
│ │ └── logo.png
│ ├── components/
│ │ ├── AddBook/
│ │ │ └── AddBook.js # Component to add new books
│ │ ├── BookItem/
│ │ │ └── BookItem.js # Component to display individual book details
│ │ ├── BrowseBooks/
│ │ │ └── BrowseBooks.js # Component to browse books by category
│ │ ├── Cart/
│ │ │ └── Cart.js # Component to manage cart items
│ │ └── Header/
│ │ └── Header.js # Header and navigation
│ ├── pages/
│ │ ├── HomePage.js # Main home page
│ │ ├── BookDetailPage.js # Book detail view page
│ │ └── CategoryPage.js # Books filtered by category
│ ├── redux/
│ │ ├── appStore.js # Redux store configuration
│ │ └── bookSlice.js # Redux slice for book-related actions and state
│ ├── utils/
│ │ └── mockData.js # Mock data for books
│ ├── App.js # Main app component
│ ├── index.js # React entry point
│ └── styles/
│ ├── global.css # Global styles
│ └── components.css # Component-specific styles
├── .gitignore
├── package.json
└── README.md
