# Chapter 66 — Logging: Reconstructing What the Server Actually Did

A user reports that a reservation failed yesterday at 14:03. console.log messages scattered through controllers are not enough to connect one request to its outcome.

This folder accompanies Chapter 66 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `package.json`
- `src/config/logger.js`
- `src/middlewares/errorHandler.js`
- `src/middlewares/requestLogger.js`

## Navigation

[Chapter 65](../../07_Professional_API/65_Helmet_and_Rate_Limiting_Sensible_HTTP_Defenses_by_Default/README.md) · [Repository guide](../../README.md) · [Chapter 67](../../08_Test_Documentation_Deployment/67_Postman_Collections_Environments_and_Tests/README.md)
