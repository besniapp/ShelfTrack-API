# Chapter 62 — Service Layer: Moving Business Work Out of HTTP Controllers

Creating a loan is no longer “insert one document.” ShelfTrack must check the member, check availability, create the loan, and change the copy count. That workflow should not be inseparable from Express req and res objects.

This folder accompanies Chapter 62 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/controllers/booksController.js`
- `src/services/booksService.js`

## Navigation

[Chapter 61](../../07_Professional_API/61_Designing_One_Response_Language_for_the_Entire_API/README.md) · [Repository guide](../../README.md) · [Chapter 63](../../07_Professional_API/63_Environment_Variables_and_a_Central_Configuration_Boundary/README.md)
