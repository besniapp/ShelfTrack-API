# Chapter 44 — Unique ISBNs: Database Constraints and Friendly Errors

Two librarians submit the same ISBN seconds apart. Checking with findOne before insert may still race. The database itself must be able to reject the duplicate.

This folder accompanies Chapter 44 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/middlewares/errorHandler.js`
- `src/models/Book.js`

## Navigation

[Chapter 43](../../06_Express_Architecture/43_versionKey_and_v_What_Mongoose_Is_Tracking/README.md) · [Repository guide](../../README.md) · [Chapter 45](../../06_Express_Architecture/45_Indexes_Paying_Storage_to_Save_Query_Work/README.md)
