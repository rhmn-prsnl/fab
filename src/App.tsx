/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreLayout } from "@/src/components/layout/StoreLayout";
import { AdminLayout } from "@/src/components/layout/AdminLayout";
import { HomePage } from "@/src/pages/store/HomePage";
import { AdminDashboard } from "@/src/pages/admin/AdminDashboard";
import { AdminProducts } from "@/src/pages/admin/AdminProducts";
import { AdminStores } from "@/src/pages/admin/AdminStores";
import { AdminUsers } from "@/src/pages/admin/AdminUsers";
import { POSDashboard } from "@/src/pages/admin/POSDashboard";
import { WarehouseDashboard } from "@/src/pages/admin/WarehouseDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* E-Commerce Storefront */}
        <Route path="/" element={
          <StoreLayout>
            <HomePage />
          </StoreLayout>
        } />

        {/* Admin Dashboard */}
        <Route path="/admin" element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        } />
        
        <Route path="/admin/products" element={
          <AdminLayout>
            <AdminProducts />
          </AdminLayout>
        } />
        
        <Route path="/admin/stores" element={
          <AdminLayout>
            <AdminStores />
          </AdminLayout>
        } />
        
        <Route path="/admin/users" element={
           <AdminLayout>
              <AdminUsers />
           </AdminLayout>
        } />
        
        <Route path="/admin/pos" element={
           <AdminLayout>
              <POSDashboard />
           </AdminLayout>
        } />
        
        <Route path="/admin/warehouse" element={
           <AdminLayout>
              <WarehouseDashboard />
           </AdminLayout>
        } />
        
        {/* Generic fallback for other admin routes */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <div className="flex items-center justify-center h-64">
              <p className="text-muted-foreground text-lg">Module coming soon</p>
            </div>
          </AdminLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
