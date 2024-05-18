import Image from "next/image";
import {useEffect} from "react";

const Card = (props) => {
    const {email, name} = props
    const url =   `https://robohash.org/${name}`


    // useEffect(() => {
    //     // {(email.length > 10 && innerWidth < 400) ? email.slice(0, 10) + '...' : email}
    // if(email.length > 10 && innerWidth < 400 ){
    //    email.slice(0,10) + '...'
    // }
    // else{
    //      email
    // }
    // }, [email]);



    console.log(innerWidth)

    return(
        <>
                <Image priority src={url} alt={'robotInfo'} width={400} height={200}/>
                <h3 className={'flex justify-center items-center text-ellipsis font-semibold  '}>
                    {name}
                   {/*{name.length > 10 < 400 ? name.slice(0, 10) + '...' : name}*/}
                </h3>
                <h4 className={'flex  justify-center items-center '}>{(email.length > 10 && innerWidth < 400) ? email.slice(0, 10) + '...' : email}</h4>
            </>

    )
}

export default Card;