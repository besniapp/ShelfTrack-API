# Chapter 47 — Pagination: Returning a Window Instead of the Entire Catalogue

Returning ten records feels easy. Returning 250,000 records wastes memory, bandwidth, and client rendering time. The API should return a useful window.

This folder accompanies Chapter 47 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/controllers/booksController.js`

## Navigation

[Chapter 46](../../06_Express_Architecture/46_Sorting_Results_and_Designing_an_Index_to_Match/README.md) · [Repository guide](../../README.md) · [Chapter 48](../../06_Express_Architecture/48_Turning_req_query_Into_Safe_Pagination_Controls/README.md)
