import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Importamos el Layout

// Importaciones dinámicas con React.lazy
const Introduccion = React.lazy(() => import("./contenidos/Introduccion"));
const DefinicionIntegral = React.lazy(() => import("./contenidos/DefinicionIntegral"));
const TiposIntegrales = React.lazy(() => import("./contenidos/TiposIntegrales"));
const AreaBajoCurva = React.lazy(() => import("./contenidos/AreaBajoLaCurva"));
const Riemann = React.lazy(() => import("./contenidos/Riemann"));
const SolidosDeRevolucion = React.lazy(() => import("./contenidos/RevolucionDeSolidos"));

export default function Content() {
  return (
    <Suspense fallback={<p>Cargando contenido...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}> {/* Usamos Layout como contenedor */}
          <Route path="introduccion" element={<Introduccion />} />
          <Route path="definicion" element={<DefinicionIntegral />} />
          <Route path="tipos" element={<TiposIntegrales />} />
          <Route path="area-bajo-curva" element={<AreaBajoCurva />} />
          <Route path="riemann" element={<Riemann />} />
          <Route path="solidos-revolucion" element={<SolidosDeRevolucion />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
