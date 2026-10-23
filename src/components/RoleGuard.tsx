'use client';

import { useAuth, UserRole } from '@/context/AuthContext';
import { ReactNode } from 'react';

interface RoleGuardProps {
  allowedRoles: UserRole[];
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleGuard({ allowedRoles, children, fallback }: RoleGuardProps) {
  const { role, loading } = useAuth();

  if (loading) {
    return <div className="p-4 text-xs text-slate-400">Checking permissions...</div>;
  }

  if (!role || !allowedRoles.includes(role)) {
    return fallback ? (
      <>{fallback}</>
    ) : (
      <div className="rounded-lg border border-red-900/50 bg-red-950/20 p-4 text-xs text-red-400">
        Access Restricted: Your current role does not have permission to view this section.
      </div>
    );
  }

  return <>{children}</>;
}
