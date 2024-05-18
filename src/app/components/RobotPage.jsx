'use client'


import Card from "./Card";

const RobotPage = ({robots})=>{

    return(


        <div className={'mt-12 space-x-2 p-4 items-center justify-center grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'}>
            {robots.map((robot,index) => {
                return(
                    <div

                        key={index}
                         className='drop-shadow-md hover:drop-shadow-x rounded-xl transition ease-in-out delay-100 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  '>
                        <Card name={robots[index].name} email={robots[index].email}

                        />
                    </div>
                )
            })}
        </div>

    )


}


export default RobotPage;