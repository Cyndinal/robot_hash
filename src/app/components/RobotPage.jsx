'use client'


import Card from "./Card";

const RobotPage = ({robots})=>{

    return(
        <>

        <div className={'px-3 p-4 items-center justify-center grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
            {robots.map((robot,index) => {
                return(
                    <div key={index}
                         className='bg-red-400 hover:bg-green-300 transition rounded-xl'>
                        <Card name={robots[index].name} email={robots[index].email}/>
                    </div>
                )
            })}
        </div>


        </>
    )


}


export default RobotPage;