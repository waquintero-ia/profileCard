import BgCard from "./BgCard"
import ImageProfile from "./ImageProfile"
import Score from "./Score"
import UserInfo from "./UserInfo"

const Card = () => {
  return(
    <>
      <div className="container w-326 min-h-375 bg-white rounded-2xl overflow-hidden flex justify-center md:w-350">
        <div className="content">
          <BgCard />
          <ImageProfile />
          <UserInfo />
          <hr className="border-grey-300 mt-6 mb-6"/>
          <Score />
        </div>
      </div>
    </>
  )
}

export default Card