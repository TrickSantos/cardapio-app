import MoneyIcon from '@assets/icons/money.svg'
import ClockIcon from '@assets/icons/clock.svg'
import Typography from '@components/atoms/typography'

const { Text } = Typography

const Delivery = () => {
  return (
    <div className="flex flex-row lg:gap-3 lg:justify-start gap-2">
      <div className="flex flex-row">
        <div>
          <img src={MoneyIcon} alt="money" />
        </div>
        <div className="ml-2 flex flex-col">
          <Text>Free</Text>
          <Text type={'secondary'}>Delivery</Text>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <img src={ClockIcon} alt="time" />
        </div>
        <div className="ml-2 flex flex-col">
          <Text>25</Text>
          <Text type={'secondary'}>Minutes</Text>
        </div>
      </div>
    </div>
  )
}

export default Delivery
