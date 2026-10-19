import * as loans from "../services/loansService.js";
export async function listLoans(req,res){ res.json({data:await loans.listLoans(req.query)}); }
export async function getLoan(req,res){ res.json({data:await loans.getLoan(req.params.loanId)}); }
export async function createLoan(req,res){ res.status(201).json({data:await loans.checkoutBook(req.body)}); }
export async function returnLoan(req,res){ res.json({data:await loans.returnLoan(req.params.loanId)}); }
