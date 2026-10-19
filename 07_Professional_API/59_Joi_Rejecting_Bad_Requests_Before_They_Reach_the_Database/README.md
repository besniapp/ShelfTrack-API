# Chapter 59 — Joi: Rejecting Bad Requests Before They Reach the Database

Mongoose protects stored data, but the API can give callers faster and clearer feedback by validating the request shape before a controller attempts database work.

This folder accompanies Chapter 59 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `package.json`
- `src/controllers/booksController.js`
- `src/models/Book.js`
- `src/validators/bookSchemas.js`

## Navigation

[Chapter 58](../../06_Express_Architecture/58_Instance_and_Static_Methods_Behavior_Belongs_Near_the_Model_When_It_Fits/README.md) · [Repository guide](../../README.md) · [Chapter 60](../../07_Professional_API/60_Validation_Middleware_Keeping_Controllers_Focused_on_Coordination/README.md)
