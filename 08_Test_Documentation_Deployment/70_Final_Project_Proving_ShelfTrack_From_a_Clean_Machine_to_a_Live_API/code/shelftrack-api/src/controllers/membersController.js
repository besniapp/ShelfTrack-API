import * as members from "../services/membersService.js";
export async function listMembers(_req,res){ res.json({data:await members.listMembers()}); }
export async function getMember(req,res){ res.json({data:await members.getMember(req.params.memberId)}); }
export async function createMember(req,res){ res.status(201).json({data:await members.createMember(req.body)}); }
export async function updateMember(req,res){ res.json({data:await members.updateMember(req.params.memberId,req.body)}); }
