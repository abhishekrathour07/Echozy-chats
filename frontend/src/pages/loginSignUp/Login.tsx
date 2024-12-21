import React, { useState } from 'react';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../components/ui/form';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, SignupSchema } from './validation/LoginSignUp.Validation';
import { Eye, EyeClosed } from 'lucide-react';

const LoginSignup: React.FC = () => {
    const [type, setType] = useState<'login' | 'signup'>('login');
    const [password, setPassword] = useState<boolean>(false)

    const togglePassword = () => setPassword(!password)

    // Determine schema based on type
    const schema = type === 'login' ? LoginSchema : SignupSchema;

    // React Hook Form setup with dynamic schema
    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues:
            type === 'signup'
                ? { name: '', email: '', password: '' }
                : { email: '', password: '' },
    });

    const onSubmit = (data: any) => {
        console.log(data);
    };
   
    return (
        <div className="bg-[url('/background.png')] bg-cover bg-center h-screen flex flex-col items-center md:flex-row justify-around p-4">
            {/* Logo Section */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img
                    src="/Echozy.png"
                    alt="Logo"
                    className="rounded-full h-32 md:h-56 shadow-lg"
                />
            </motion.div>

            {/* Form Section */}
            <motion.div
                className="w-full max-w-md p-8 bg-slate-900 dark:bg-white dark:text-slate-800 rounded-xl shadow-md m-4 md:m-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }}
            >
                {/* Heading */}
                <motion.h2
                    className="text-3xl font-bold text-center text-white dark:text-slate-800  mb-6 "
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    {type === 'login' ? 'Welcome back! Login here..' : 'Create Your Account'}
                </motion.h2>

                <Form {...form}>
                    <div className="space-y-4 ">
                        {/* Name Field (only for signup) */}
                        {type === 'signup' && (
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-medium text-white dark:text-slate-800 ">
                                            Name<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <input
                                                type="text"
                                                className="w-full p-3 border text-white dark:text-slate-800 dark:bg-slate-100 rounded-md outline-none bg-slate-800 focus:ring-2 focus:ring-slate-500"
                                                placeholder="Enter your name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-red-500" />
                                    </FormItem>
                                )}
                            />
                        )}

                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="font-medium text-white dark:text-slate-800">
                                        Email Address<span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            type="email"
                                            className="w-full p-3 border text-white rounded-md outline-none bg-slate-800 dark:bg-slate-100 dark:text-slate-800 focus:ring-2 focus:ring-slate-500"
                                            placeholder="Enter your email"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className='relative'>
                                        <FormLabel className="font-medium text-white dark:text-slate-800">
                                            Password<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl >
                                            <input
                                                type={password === true ? "text" : "password"}
                                                className="w-full p-3 border text-white rounded-md bg-slate-800 dark:bg-slate-100 dark:text-slate-800 outline-none focus:ring-2 focus:ring-slate-500"
                                                placeholder="Enter your password"
                                                {...field}
                                            />
                                        </FormControl>
                                        <div className='absolute bottom-3 right-5 text-white dark:text-black' onClick={togglePassword}>{password === true ? <Eye /> : <EyeClosed />}</div>

                                    </div>
                                    <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            className="w-full bg-white text-lg font-semibold text-black dark:text-white dark:bg-slate-900 p-3 rounded-md hover:bg-slate-300 transition mt-2"
                            whileTap={{ scale: 0.95 }}
                            onClick={form.handleSubmit(onSubmit)}
                        >
                            {type === 'login' ? 'Login' : 'Signup'}
                        </motion.button>

                        {/* Login with Google Button */}
                        <motion.button
                            className="w-full bg-slate-500 text-lg font-semibold text-white p-3 rounded-md shadow hover:bg-slate-400 transition mt-4 flex items-center justify-center gap-2"
                            whileTap={{ scale: 0.95 }}

                        >
                            <img src='/search.png' className='h-6 w-6' />
                            {type === 'login' ? "Login with Google" : "signup with Google"}
                        </motion.button>

                        {/* Toggle Login/Signup */}
                        <motion.div
                            className="text-center text-gray-600 mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            {type === 'login' ? (
                                <p className="flex gap-2 text-slate-400 dark:text-black justify-center">
                                    Don't have an account?
                                    <span
                                        className="text-white font-semibold cursor-pointer dark:text-blue-900"
                                        onClick={() => setType('signup')}
                                    >
                                        Signup
                                    </span>
                                </p>
                            ) : (
                                <p className="text-slate-400 dark:text-black flex gap-2 justify-center">
                                    Already have an account?
                                    <span
                                        className="text-white font-semibold cursor-pointer dark:text-blue-900"
                                        onClick={() => setType('login')}
                                    >
                                        Login
                                    </span>
                                </p>
                            )}
                        </motion.div>
                    </div>
                </Form>
            </motion.div>
        </div>
    );
};

export default LoginSignup;
