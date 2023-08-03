import Typography from '@components/atoms/typography'

const { Text } = Typography

const Tags = () => {
  return (
    <div className="w-full flex flex-row md:gap-2 font-sans text-gray-500">
      <div className="md:grow-0 grow">
        <Text>$$</Text>
      </div>
      <div className="md:grow-0 grow">
        <Text>Chinese</Text>
      </div>
      <div className="md:grow-0 grow">
        <Text>American</Text>
      </div>
      <div className="md:grow-0 grow">
        <Text>Deshi food</Text>
      </div>
    </div>
  )
}

export default Tags
