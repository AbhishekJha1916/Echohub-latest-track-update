import { Worker} from "bullmq";
import Redis from "ioredis";
import { sendWelcomeEmail } from "./welcomeMail"; 

const redisConfig = {
  port: 6379,
  host: "127.0.0.1",
};

const redisConnection = new Redis(redisConfig);

export const Welcomeworker = new Worker(
  "email-queue",
  async (job) => {

    try {   
      const { email, firstName } = job.data;
      await sendWelcomeEmail(email, firstName);
    } catch (error) {
      console.error(`Failed to send email for job ${job.id}`, error);
    }
  },
  { connection: redisConfig }
);

Welcomeworker.on("completed", (job) => {
  console.log(`Job ${job.id} completed successfully`);
});

Welcomeworker.on("failed", (job, err) => {
  console.log(`Job ${job?.id} failed with error ${err.message}`);
});
