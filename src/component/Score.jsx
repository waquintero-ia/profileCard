import Items from "./Items"
import score from "../data/score.json"

const Score = () =>{
  return(
    <>
          <div className="score_container flex justify-center">
            <div className="score_content w-[240px] flex gap-[46px]">
              <div className="score_part_1 flex gap-[40px]">
                <Items
                  key={score[0].tag}
                  score={score[0].score}
                  tag={score[0].tag} />

                <Items
                  key={score[1].tag}
                  score={score[1].score}
                  tag={score[1].tag} />
              </div>

              <Items
                  key={score[2].tag}
                  score={score[2].score}
                  tag={score[2].tag} />
                          
            </div>
          </div>
    </>
  )
}

export default Score