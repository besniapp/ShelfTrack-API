# Chapter 60 — Validation Middleware: Keeping Controllers Focused on Coordination

Validation works, but copying schema.validate into every controller simply moves repetition to a different place. A reusable middleware can validate before the controller runs.

This folder accompanies Chapter 60 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/controllers/booksController.js`
- `src/middlewares/validateBody.js`
- `src/routes/booksRouter.js`

## Navigation

[Chapter 59](../../07_Professional_API/59_Joi_Rejecting_Bad_Requests_Before_They_Reach_the_Database/README.md) · [Repository guide](../../README.md) · [Chapter 61](../../07_Professional_API/61_Designing_One_Response_Language_for_the_Entire_API/README.md)
