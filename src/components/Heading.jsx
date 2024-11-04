import PropTypes from 'prop-types';



const Heading = ({title , subTitle=''}) => {
  return (
    <div className="text-center">
      <h3 className="text-center text-3xl font-bold mb-3">{title}</h3>
      <p className="text-center">{subTitle}</p>
    </div>
  )
}
Heading.propTypes={
  title:PropTypes.string,
  subTitle:PropTypes.string
}
export default Heading
