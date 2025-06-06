'use client';
import React, { useState } from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';
import { LooadingSpinner } from '@/component';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  subject: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
      const res = await fetch('https://formspree.io/f/mgvkglnz', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (res.ok) {
        setIsLoading(false);
        const toast = (await import('react-hot-toast')).default;
        toast.success('Message sent');
        reset();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      const toast = (await import('react-hot-toast')).default;
      toast.error('Failed to send message');
    }
  };

  const labelStyles = 'block max-lg:text-sm text-lg font-bold ';
  const inputStyles =
    'text-secondary mt-2 w-full max-sm:py-2 py-3 px-5 border border-secondary rounded-lg focus:outline-none ';
  const errorStyle = 'text-red-500 text-sm mt-1';

  return (
    <section id="contacts" className="section">
      <div className="contentMargin space-y-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-10"
        >
          <h1 className="text-center text-3xl font-bold">Get In Touch</h1>
          <div className="w-full flex justify-center">
            <p className="text-center text-lg text-gray md:max-w-[600px]">
              I help design, enhance, and build intuitive product experiences — whether you’re
              starting fresh or improving an existing product. Let’s connect and bring your ideas to
              life.
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="basis-4/12  space-y-10"
          >
            <div className="flex flex-col items-center">
              <IoIosPhonePortrait className="text-2xl  " />
              <h3 className="text-lg font-semibold ">Call Me</h3>
              <div>
                {' '}
                <p className="text-sm ">+234 906 3141 404</p>
                <p className="text-sm ">+234 705 9717 019</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <CiMail className="text-2xl  " />
              <h3 className="text-lg font-semibold ">Email</h3>
              <div>
                {' '}
                <p className="text-sm ">teajhaney@gmail.com</p>
              </div>
            </div>
          </motion.div>
          {/* right column */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="basis-8/12 "
          >
            {/* form */}
            <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
              <div className="flex flex-col md:flex-row gap-5  w-full">
                {/* name */}
                <div className="w-full">
                  <label htmlFor="name" className={labelStyles}>
                    Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="text"
                    id="name"
                    {...register('name')}
                    className={inputStyles}
                  />
                  {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
                </div>
                {/* email */}
                <div className="w-full">
                  <label htmlFor="email" className={labelStyles}>
                    Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    type="email"
                    id="email"
                    {...register('email')}
                    className={inputStyles}
                  />
                  {errors.email && <p className={errorStyle}>{errors.email.message}</p>}
                </div>
              </div>
              {/* subject */}
              <div>
                <label htmlFor="subject" className={labelStyles}>
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className={inputStyles}
                />
                {errors.subject && <p className={errorStyle}>{errors.subject.message}</p>}
              </div>

              {/* messsage */}
              <div className="">
                <label htmlFor="message" className={labelStyles}>
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  id="message"
                  {...register('message')}
                  rows={4}
                  className={`${inputStyles} resize-none`}
                />
                {errors.message && <p className={errorStyle}>{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                className="w-52 bg-secondary text-white py-3 px-5 rounded-lg hover:bg-accent transition-colors duration-300 font-semibold flex justify-center cursor-pointer"
              >
                {isLoading ? (
                  <LooadingSpinner className="border-white group-hover:border-primary w-6 h-6" />
                ) : (
                  <p className="text-xs md:text-sm font-inter">Sending message</p>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
