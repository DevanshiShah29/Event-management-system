import { Router } from "express";
import authRoutes from "./authRoutes";
import eventsRoutes from "./eventsRoutes";
import ticketBookRoutes from "./eventBookRoutes";
import dashboardRoutes from "./dashboardRoutes";
import contactRoutes from "./contactRoutes";
import faqRoutes from "./faqRoutes";
import termsRoutes from "./termsRoutes";
import ticketTypeRoutes from "./ticketTypeRoutes";

const router = Router();
router.use(authRoutes);
router.use("/events", eventsRoutes);
router.use("/ticket/book", ticketBookRoutes);
router.use("/dashboard/analytics", dashboardRoutes);
router.use("/contact-us", contactRoutes);
router.use("/faq", faqRoutes);
router.use("/terms-and-conditions", termsRoutes);
router.use('/ticket-types', ticketTypeRoutes);

export default router;
