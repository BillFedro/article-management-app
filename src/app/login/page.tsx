'use client';

import AuthCard from '@/components/AuthCard';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <AuthCard type="login" />
    </div>
  );
}
