'use client';
import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { CiMail } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'motion/react';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
  subject: z.string().min(1, 'Message is required'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const labelStyles = 'block max-lg:text-sm text-lg font-bold ';
  const inputStyles =
    'text-secondary mt-2 w-full max-sm:py-2 py-3 px-5 border border-secondary rounded-lg focus:outline-none ';
  const errorStyle = 'text-red-500 text-sm mt-1';
  // 	const inputVariant; {
  // 		initial: { scale: 1 },
  // 		final:
  // }
  return (
    <section id="contacts" className="section">
      <div className="contentMargin space-y-10 ">
        <h1 className="text-center text-2xl font-bold">Get In Touch</h1>
        <p className="text-center text-sm text-gray">
          I help design, enhance, and build intuitive product experiences — whether you’re starting
          fresh or improving an existing product. Let’s connect and bring your ideas to life.
        </p>
        <div className="flex flex-col lg:flex-row gap-10  w-full">
          {/* Left Column */}
          <div className="basis-4/12  space-y-10">
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
          </div>
          {/* right column */}
          <div className="basis-8/12 ">
            <form onSubmit={handleSubmit(() => {})} className=" space-y-5">
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
                className="w-fit bg-secondary text-white py-3 px-5 rounded-lg hover:bg-accent transition-colors duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
