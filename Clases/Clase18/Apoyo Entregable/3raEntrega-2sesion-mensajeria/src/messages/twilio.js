import twilio from "twilio";

const accountId ="account de twilio";
const authToken="token de twilio";
export const twilioAdminPhone="numero generado en twilio";
export const twillioWapp="whatsapp de twilio";
export const AdminWapp="whatsapp administrador";

export const twilioClient = twilio(accountId,authToken);