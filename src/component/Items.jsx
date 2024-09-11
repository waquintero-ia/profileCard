import PropTypes from 'prop-types';

const Items = ({score, tag}) =>{
  return(
    <>
      <div className="score flex flex-col gap-[9px] text-center leading-[100%]">
        <div className="number text-[18px] font-bold tracking-wider">
          {score}
        </div>
        <div className="tag text-[10px] tracking-[1.5px] text-grey-600">
          {tag}
        </div>
      </div>
    </>
  )
}

Items.propTypes = {
  score: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired,      
};

export default Items