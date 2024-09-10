import BgCard from "./BgCard"
import ImageProfile from "./ImageProfile"
import Score from "./Score"
import UserInfo from "./UserInfo"

const Card = () => {
  return(
    <>
      <div className="container w-[326px] min-h-[375px] bg-white rounded-2xl overflow-hidden flex justify-center">
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