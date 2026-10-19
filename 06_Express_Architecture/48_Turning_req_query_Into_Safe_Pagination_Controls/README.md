# Chapter 48 — Turning req.query Into Safe Pagination Controls

The browser sends ?page=2&limit=20, but query parameters arrive as strings and a caller can send zero, negative values, or an absurdly large limit.

This folder accompanies Chapter 48 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/controllers/booksController.js`
- `src/utils/parsePagination.js`

## Navigation

[Chapter 47](../../06_Express_Architecture/47_Pagination_Returning_a_Window_Instead_of_the_Entire_Catalogue/README.md) · [Repository guide](../../README.md) · [Chapter 49](../../06_Express_Architecture/49_Pagination_Metadata_With_countDocuments/README.md)
