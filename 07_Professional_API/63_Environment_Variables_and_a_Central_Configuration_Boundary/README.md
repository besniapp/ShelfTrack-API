# Chapter 63 — Environment Variables and a Central Configuration Boundary

Local development and production should not share the same port, database URL, or security settings. Hard-coding environment-specific values forces source-code edits during deployment.

This folder accompanies Chapter 63 of *Node.js Backend Development*.

## Chapter-end reference

`code/` contains the files added or changed in this chapter. Apply them to your existing working project after following the chapter. Files not listed here continue from earlier chapters. This folder is not a complete standalone application.

- `.env.example`
- `src/config/config.js`
- `src/index.js`

## Navigation

[Chapter 62](../../07_Professional_API/62_Service_Layer_Moving_Business_Work_Out_of_HTTP_Controllers/README.md) · [Repository guide](../../README.md) · [Chapter 64](../../07_Professional_API/64_CORS_Deciding_Which_Browser_Origins_May_Read_the_API/README.md)
