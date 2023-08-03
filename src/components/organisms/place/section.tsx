import Typography from '@components/atoms/typography'
import Item from '@components/molecules/section/item'

export type SectionProps = {
  title: string
}

const { Title } = Typography

const Section = (props: SectionProps) => {
  const { title } = props
  return (
    <div className="flex flex-col gap-3">
      <Title level={3} className="font-semibold lg:text-2xl 2xl:text-3xl my-2">
        {title}
      </Title>
      <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
        <Item
          image="https://picsum.photos/1000/1000"
          title="Cookie Sandwich"
          description="Shortbread, chocolate turtle cookies, and red velvet, lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          price={10}
          tags={['Chinese']}
        />
        <Item
          image="https://picsum.photos/1000/1000"
          title="Cookie Sandwich"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price={10}
          tags={['Chinese']}
        />
        <Item
          image="https://picsum.photos/1000/1000"
          title="Cookie Sandwich"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price={10}
          tags={['Chinese']}
        />
        <Item
          image="https://picsum.photos/1000/1000"
          title="Cookie Sandwich"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price={10}
          tags={['Chinese']}
        />
      </div>
    </div>
  )
}

export default Section
