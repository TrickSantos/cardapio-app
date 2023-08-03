import Typography from '@components/atoms/typography'

export type ItemProps = {
  image: string
  title: string
  description: string
  price: number
  tags: string[]
}

const { Title, Paragraph, Text } = Typography

const Item = (props: ItemProps) => {
  const { image, title, description, price, tags } = props

  return (
    <div className="flex flex-row md:max-w-1/3 gap-3">
      <img className="md:w-1/3 xl:w-2/5 w-4/12 h-fit rounded-2xl" src={image} alt="food-1" />
      <div className="flex flex-col justify-start">
        <Title level={5} className="md:text-lg 2xl:text-2xl font-bold">
          {title}
        </Title>
        <Paragraph className="text-sm xl:text-base text-gray xs:line-clamp-4 line-clamp-3">
          {description}
        </Paragraph>
        <div className="flex flex-row justify-start gap-2 text-gray ">
          {tags.map((tag) => (
            <Text key={tag} className="xl:text-base 2xl:text-xl font-medium">
              {tag}
            </Text>
          ))}
          <Text className="xl:text-base 2xl:text-xl text-yellow">{`$ ${price}`}</Text>
        </div>
      </div>
    </div>
  )
}

export default Item
