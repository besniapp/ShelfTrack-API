# Chapter 43 — versionKey and __v: What Mongoose Is Tracking

A stored document contains a field we never added: __v. Deleting unfamiliar metadata is tempting, but first we need to understand why the library added it.

This folder accompanies Chapter 43 of *Node.js Backend Development*.

## Follow the chapter

This chapter focuses on understanding or inspecting behavior; it does not require a replacement application source file. Continue with the working project from the previous chapter where applicable.

Inspect `__v` on saved documents. The default version key remains enabled; it is not a count of every possible database update. No source-file replacement is required in this chapter.

## Navigation

[Chapter 42](../../06_Express_Architecture/42_timestamps_Letting_Mongoose_Track_Time_Consistently/README.md) · [Repository guide](../../README.md) · [Chapter 44](../../06_Express_Architecture/44_Unique_ISBNs_Database_Constraints_and_Friendly_Errors/README.md)
