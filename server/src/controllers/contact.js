import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import ErrorHandler from '../utils/errorHandler.js';
import { contactService } from '../services/index.js';
import { sendMail } from '../utils/sendEmail.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const { email, message, name } = req.body;

  if (!email) {
    return next(new ErrorHandler('Fill out email', 400));
  }
  if (!message) {
    return next(new ErrorHandler('Fill out message', 400));
  }
  if (!name) {
    return next(new ErrorHandler('Fill out name', 400));
  }

  // Copy of mail to administrator
  try {
    await sendMail({
      email: 'admin@admin.com',
      subject: `Denne meldingen ble sendt av ${name} via deres kontaktside.`,
      message: `${message}`,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }

  // Verification email to user
  try {
    await sendMail({
      email,
      subject: `Hei ${name} - dette er en bekreftelse på at din melding ble sendt til FG Rørleggerfirma`,
      message: `Melding: ${message}`,
    });
  } catch (error) {
    return next(new ErrorHandler(error, 500));
  }

  const contact = await contactService.createContact(req.body);
  response(res, 201, true, contact);
});

export const getById = catchAsyncErrors(async (req, res, next) => {
  const contact = await contactService.getContactById(req.params.id);
  if (!contact) {
    return next(new ErrorHandler('Contact not found', 404));
  }
  response(res, 200, true, contact);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contactService.getAllContacts();
  response(res, 201, true, contacts);
});
