


// eslint-disable-next-line react/prop-types
const Heading = ({title , subTitle=''}) => {
  return (
    <div className="text-center">
      <h3 className="text-center text-3xl font-bold mb-3">{title}</h3>
      <p className="text-center">{subTitle}</p>
    </div>
  )
}

export default Heading
