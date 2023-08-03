import Category from '@components/molecules/categories/category'
import { useState } from 'react'

const Categories = () => {
  const [active, setActive] = useState(0)

  return (
    <div className="mt-4 flex flex-row gap-2 flex-nowrap whitespace-nowrap overflow-hidden">
      <Category name="Sea Foods" onClick={() => setActive(0)} active={active === 0} />
      <Category name="Appetizers" onClick={() => setActive(1)} active={active === 1} />
      <Category name="Dim Sum" onClick={() => setActive(2)} active={active === 2} />
      <Category name="Beef & Lamb" onClick={() => setActive(3)} active={active === 3} />
    </div>
  )
}

export default Categories
