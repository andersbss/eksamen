import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import { contactService } from '../services/index.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.createContact(req.body);
  response(res, 201, true, contact);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contactService.getAllContacts();
  response(res, 201, true, contacts);
});
