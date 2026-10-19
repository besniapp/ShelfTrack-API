# Chapter 53 — Atomic Updates: Changing Copy Counts Without Read-Modify-Write Races

A librarian receives three new copies. Reading the old value in Node, adding three, then saving can lose updates when another request changes the same record at the same time.

This folder accompanies Chapter 53 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `examples/decrementAvailableCopies.js`
- `src/controllers/booksController.js`

## Navigation

[Chapter 52](../../06_Express_Architecture/52_Projection_select_and_lean_Returning_Only_What_the_Client_Needs/README.md) · [Repository guide](../../README.md) · [Chapter 54](../../06_Express_Architecture/54_Query_Helpers_and_Middleware_for_Repeated_Query_Rules/README.md)
