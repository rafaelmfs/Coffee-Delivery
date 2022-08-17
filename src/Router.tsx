import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './layouts/Baselayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout">
          <Route index element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
