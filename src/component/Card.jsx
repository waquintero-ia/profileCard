import BgCard from "./BgCard"
import ImageProfile from "./ImageProfile"
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
          <div className="score_container flex justify-center">
            <div className="score_content w-[240px] flex gap-[46px]">
              <div className="score_part_1 flex gap-[40px]">
                <div className="score flex flex-col gap-[9px] text-center leading-[100%]">
                  <div className="number text-[18px] font-bold tracking-wider">
                    80K
                  </div>
                  <div className="tag text-[10px] tracking-[1.5px]">
                    Followers
                  </div>
                </div>
                <div className="score flex flex-col gap-[9px] text-center leading-[100%]">
                  <div className="number text-[18px] font-bold tracking-wider">
                    803K
                  </div>
                  <div className="tag text-[10px] tracking-[1.5px]">
                    Likes
                  </div>
                </div>
              </div>
              <div className="score flex flex-col gap-[9px] justify-center text-center leading-[100%]">
                <div className="number text-[18px] font-bold tracking-wider">
                  1.4K
                </div>
                <div className="tag text-[10px] tracking-[1.5px]">
                  Photos
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card