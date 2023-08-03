import Typography from '@components/atoms/typography'
import Tags from '@components/molecules/header/tags'
import Ratings from '@components/molecules/header/ratings'
import Delivery from '@components/molecules/header/delivery'

const { Title } = Typography

const Header = () => {
  return (
    <div className="w-full flex flex-col space-y-2">
      <Title className="font-semibold">Mayfield Bakery & Cafe</Title>
      <Tags />
      <Ratings />
      <Delivery />
    </div>
  )
}

export default Header
