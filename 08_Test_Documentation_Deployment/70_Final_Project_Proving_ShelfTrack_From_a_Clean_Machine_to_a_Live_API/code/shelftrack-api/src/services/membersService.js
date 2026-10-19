import { Member } from "../models/Member.js";
import { AppError } from "../utils/AppError.js";

export async function listMembers() { return Member.find().sort({ name: 1, _id: 1 }).lean(); }
export async function getMember(memberId) {
  const member = await Member.findById(memberId);
  if (!member) throw new AppError(404, "MEMBER_NOT_FOUND", "Member was not found");
  return member;
}
export async function createMember(input) { return Member.create(input); }
export async function updateMember(memberId, input) {
  const member = await Member.findByIdAndUpdate(memberId, { $set: input }, { returnDocument: "after", runValidators: true });
  if (!member) throw new AppError(404, "MEMBER_NOT_FOUND", "Member was not found");
  return member;
}
