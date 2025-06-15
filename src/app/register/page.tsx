'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        router.push('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
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

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-900">Username</label>
                        <input
                            type="text"
                            placeholder="Input username"
                            className="mt-1 w-full px-3 py-2 border rounded-md text-sm placeholder:text-gray-400 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-900">Password</label>
                        <div className="relative mt-1">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Input password"
                                className="w-full px-3 py-2 border rounded-md text-sm pr-10 placeholder:text-gray-400 focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium text-gray-900">Role</label>
                        <select className="mt-1 w-full px-3 py-2 border rounded-md text-sm placeholder:text-gray-400 focus:outline-none">
                            <option>Select Role</option>
                            <option>Admin</option>
                            <option>User</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition text-sm"
                    >
                        Register
                    </button>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-blue-600 hover:underline">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
}
