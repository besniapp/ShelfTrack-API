# Chapter 61 — Designing One Response Language for the Entire API

One endpoint returns { book }, another returns { data }, and a third sends a plain string. The frontend can handle all of them, but every inconsistency becomes extra client code.

This folder accompanies Chapter 61 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/controllers/booksController.js`
- `src/middlewares/errorHandler.js`

## Navigation

[Chapter 60](../../07_Professional_API/60_Validation_Middleware_Keeping_Controllers_Focused_on_Coordination/README.md) · [Repository guide](../../README.md) · [Chapter 62](../../07_Professional_API/62_Service_Layer_Moving_Business_Work_Out_of_HTTP_Controllers/README.md)
