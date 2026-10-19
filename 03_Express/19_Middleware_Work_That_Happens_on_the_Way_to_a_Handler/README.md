# Chapter 19 — Middleware: Work That Happens on the Way to a Handler

Every ShelfTrack request may need shared work such as request logging, JSON parsing, or reusable checks. Repeating those steps inside every route would mix cross-cutting concerns with endpoint logic.

This folder accompanies Chapter 19 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/server.js`

## Navigation

[Chapter 18](../../03_Express/18_Receiving_JSON_From_the_Request_Body/README.md) · [Repository guide](../../README.md) · [Chapter 20](../../04_MongoDB/20_The_Moment_In_Memory_Data_Stops_Being_Enough/README.md)
