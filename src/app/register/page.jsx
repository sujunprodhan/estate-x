'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, UserPlus, User, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const password = watch('password');

  const onSubmit = async (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log('Registration Data:', data);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop)`,
        }}
      />

      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm z-0"></div>
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors font-semibold mb-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link href={'/'} className="text-4xl font-extrabold tracking-tight block">
            <span className="text-amber-500">Estate</span>
            <span className="text-white">X</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 dark:bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
        >
          <div className="p-8 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white tracking-tight">Create an Account</h2>
              <p className="text-sm text-slate-300 mt-2">
                Join Estate-X and find your dream home today.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`block w-full pl-11 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-white/20'} rounded-xl bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all`}
                    {...register('name', { required: 'Full Name is required' })}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 font-medium">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className={`block w-full pl-11 pr-4 py-3 border ${errors.email ? 'border-red-500' : 'border-white/20'} rounded-xl bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all`}
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 font-medium">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`block w-full pl-11 pr-12 py-3 border ${errors.password ? 'border-red-500' : 'border-white/20'} rounded-xl bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all`}
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-xs text-red-400 font-medium">{errors.password.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`block w-full pl-11 pr-12 py-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/20'} rounded-xl bg-slate-900/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all`}
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === password || 'The passwords do not match',
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-amber-500 transition-colors"
                  >
                    {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-red-400 font-medium">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-amber-500/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <UserPlus size={20} />
                    Create Account
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-300">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-bold text-amber-500 hover:text-amber-400 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
