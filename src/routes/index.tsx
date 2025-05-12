import { LoaderPage } from "@/components/UI";
import { BaseLayout } from "@/layouts";
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Detail = lazy(() => import("@/pages/Detail"));

const AppRoutes: React.FC = () => (
  <Suspense fallback={<LoaderPage />}>
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
