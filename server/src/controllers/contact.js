import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import ErrorHandler from '../utils/errorHandler.js';
import { contactService, userService } from '../services/index.js';
import { sendMail } from '../utils/sendEmail.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const { email, message } = req.body;

  const user = await userService.getUserByEmail(email);
  if (!user) {
    return next(new ErrorHandler('User (by email) not found', 404));
  }
  if (!email) {
    return next(new ErrorHandler('Fill out email', 400));
  }
  if (!message) {
    return next(new ErrorHandler('Fill out message', 400));
  }

  try {
    await sendMail({
      email: user.email,
      subject: `Denne meldingen ble sendt av ${user.firstName} ${user.lastName} til Rørleggerfirma FG via deres kontaktside.`,
      message: `${message}`,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }

  const contact = await contactService.createContact(req.body);
  response(res, 201, true, contact);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contactService.getAllContacts();
  response(res, 201, true, contacts);
});
