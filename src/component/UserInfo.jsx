const UserInfo = () =>{
  return(
    <>
      <div className="user_info flex flex-col justify-center items-center text-18 text-grey-900 leading-[100%] gap-13">
        <div className="title_user_info flex flex-row gap-[8.5px]">
          <h1 className="font-bold">
            Victor Crest 
          </h1>
          <span className="text-grey-600">
            26
          </span>
        </div>
        <p className="text-[14px] text-grey-600">
          London
        </p>
      </div>
    </>
  )
}

export default UserInfo