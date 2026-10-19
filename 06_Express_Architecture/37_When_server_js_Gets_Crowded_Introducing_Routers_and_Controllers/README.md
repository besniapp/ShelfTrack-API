# Chapter 37 — When server.js Gets Crowded: Introducing Routers and Controllers

CRUD is working, but one startup file now contains connection code, routes, validation, and database logic. The code has not failed; its organization has.

This folder accompanies Chapter 37 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `package.json`
- `src/controllers/booksController.js`
- `src/index.js`
- `src/routes/booksRouter.js`
- `src/server.js`

Replace the previous combined server with the app module and startup module here. `npm start` now runs `src/index.js`. Reuse the database module and Book model from earlier chapters.

## Navigation

[Chapter 36](../../05_Mongoose/36_DELETE_books_bookId_Removing_a_Resource_Carefully/README.md) · [Repository guide](../../README.md) · [Chapter 38](../../06_Express_Architecture/38_Placing_Middleware_Where_Its_Responsibility_Is_Clear/README.md)
