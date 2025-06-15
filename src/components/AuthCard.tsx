'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

interface AuthCardProps {
    type: 'login' | 'register';
}

export default function AuthCard({ type }: AuthCardProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
                <Image
                    src="/logo/Frame.png"
                    alt="Logo"
                    width={100}
                    height={24}
                    className="h-6 w-auto"
                />

            </div>

            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-[#111827]">Username</label>
                    <input
                        type="text"
                        placeholder="Input username"
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-[#111827]">Password</label>
                    <div className="relative mt-1">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Input password"
                            className="w-full px-3 py-2 border rounded-md text-sm pr-10 focus:outline-none"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

                {/* <div>
                    <label className="block text-sm font-medium text-[#111827]">Role</label>
                    <select
                        className="mt-1 w-full px-3 py-2 border rounded-md text-sm focus:outline-none"
                    >
                        <option>Select Role</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                </div> */}

                <button
                    type="submit"
                    className="w-full bg-[#2563EB] text-white py-2 rounded-md hover:bg-blue-700 transition text-sm"
                >
                    {type === 'login' ? 'Login' : 'Register'}
                </button>

                <div className="text-center text-sm text-[#475569]">
                    {type === 'login' ? (
                        <>
                            Don&apos;t have an account?{' '}

                            <a href="/register" className="text-blue-600 hover:underline">Register</a>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <a href="/login" className="text-blue-600 hover:underline">Login</a>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}
