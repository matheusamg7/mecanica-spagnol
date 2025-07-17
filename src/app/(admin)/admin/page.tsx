// Página index admin - redireciona para dashboard

import { redirect } from 'next/navigation';

export default function AdminPage() {
  redirect('/admin/dashboard');
}