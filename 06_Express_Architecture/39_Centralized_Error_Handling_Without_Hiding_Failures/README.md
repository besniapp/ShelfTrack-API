# Chapter 39 — Centralized Error Handling Without Hiding Failures

Every controller currently repeats try/catch and response formatting. Repetition makes it easy for similar failures to return different shapes.

This folder accompanies Chapter 39 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/middlewares/errorHandler.js`
- `src/server.js`
- `src/utils/AppError.js`

## Navigation

[Chapter 38](../../06_Express_Architecture/38_Placing_Middleware_Where_Its_Responsibility_Is_Clear/README.md) · [Repository guide](../../README.md) · [Chapter 40](../../06_Express_Architecture/40_Mongoose_Validation_Protecting_the_Database_Boundary/README.md)
