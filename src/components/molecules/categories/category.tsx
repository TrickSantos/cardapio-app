import Typography from '@components/atoms/typography'

const { Title } = Typography

type Props = {
  name: string
  active: boolean
  onClick?: () => void
}

const Category = ({ active, name, onClick }: Props) => {
  return (
    <Title
      onClick={onClick}
      level={2}
      className={`xl:text-3xl font-semibold ${active ? '' : 'text-gray'}`}
    >
      {name}
    </Title>
  )
}

export default Category
