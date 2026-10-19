# Chapter 41 — strict Mode: What Happens to Fields the Schema Does Not Know

A client submits an innocent typo: availbleCopies. If the database silently keeps every unknown field, inconsistent shapes can spread. If it silently drops them, the client may not notice the mistake.

This folder accompanies Chapter 41 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/models/Book.js`

## Navigation

[Chapter 40](../../06_Express_Architecture/40_Mongoose_Validation_Protecting_the_Database_Boundary/README.md) · [Repository guide](../../README.md) · [Chapter 42](../../06_Express_Architecture/42_timestamps_Letting_Mongoose_Track_Time_Consistently/README.md)
