# Chapter 38 — Placing Middleware Where Its Responsibility Is Clear

Chapter 19 introduced middleware while ShelfTrack was still small. Chapter 37 then separated routes from controllers. The middleware model has not changed, but the architecture now gives us more places where middleware *could* be mounted. That makes scope and order design decisions rather than incidental details.

This folder accompanies Chapter 38 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `src/middlewares/requestLogger.js`
- `src/server.js`

## Navigation

[Chapter 37](../../06_Express_Architecture/37_When_server_js_Gets_Crowded_Introducing_Routers_and_Controllers/README.md) · [Repository guide](../../README.md) · [Chapter 39](../../06_Express_Architecture/39_Centralized_Error_Handling_Without_Hiding_Failures/README.md)
