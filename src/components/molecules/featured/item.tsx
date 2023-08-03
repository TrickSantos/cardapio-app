import Typography from '@components/atoms/typography'

const { Text, Title } = Typography

const Item = () => {
  return (
    <div className="flex flex-col space-y-2">
      <img className="w-44 h-44 rounded-2xl" src="https://picsum.photos/1000/1000" alt="food-1" />
      <div className="w-full">
        <Title level={4}>Cookie Sandwich</Title>
        <div className="flex flex-row justify-start gap-2">
          <Text className="text-gray">$$</Text>
          <Text className="text-gray">Chinese</Text>
        </div>
      </div>
    </div>
  )
}

export default Item
