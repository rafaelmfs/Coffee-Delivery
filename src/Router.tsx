import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './layouts/Baselayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* <Route path="/success" element={<Success />} /> */}
      </Route>
    </Routes>
  )
}
