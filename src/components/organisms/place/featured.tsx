import Typography from '@components/atoms/typography'
import Item from '@components/molecules/featured/item'

const { Title } = Typography

const Featured = () => {
  return (
    <div className="flex flex-col gap-2">
      <Title level={2} className="font-semibold">
        Featured Items
      </Title>
      <div className="flex flex-row gap-2">
        <Item />
        <Item />
      </div>
    </div>
  )
}

export default Featured
