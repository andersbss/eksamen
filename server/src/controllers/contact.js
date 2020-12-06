import catchAsyncErrors from '../middleware/catchAsync.js';
import response from '../utils/response.js';
import { contactService } from '../services/index.js';
import { sendMail } from '../utils/sendEmail.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const { name, message } = req.body;

  try {
    await sendMail({
      email: 'placeholder@email.no',
      subject: `Denne meldingen ble sendt av ${name} til Rørleggerfirma FG via deres kontaktside.`,
      message: `${message}`,
    });
  } catch (error) {
    console.log(error);
  }

  const contact = await contactService.createContact(req.body);
  response(res, 201, true, contact);
});

export const getAll = catchAsyncErrors(async (req, res, next) => {
  const contacts = await contactService.getAllContacts();
  response(res, 201, true, contacts);
});
