import Typography from '@components/atoms/typography'

const { Text } = Typography

const Ratings = () => {
  return (
    <div className="flex flex-row gap-2 items-end">
      <Text type="secondary">4,3</Text>
      <span>⭐</span>
      <Text type="secondary">200+ Ratings</Text>
    </div>
  )
}

export default Ratings
