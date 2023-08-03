import Categories from '@components/organisms/place/categories'
import Featured from '@components/organisms/place/featured'
import Header from '@components/organisms/place/header'
import Section from '@components/organisms/place/section'

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full xl:h-2/6 md:h-1/5">
        <img className="w-full h-full object-cover" src="https://picsum.photos/2000/1000" alt="" />
      </div>
      <div className="w-full h-full p-4">
        <div className="w-full flex flex-col space-y-2">
          <Header />
          <Featured />
          <Categories />
          <Section title="Most Populars" />
          <Section title="Sea Foods" />
        </div>
      </div>
    </div>
  )
}

export default Home
