import Image from "next/image";
const Card = (props) => {
    const {email, name} = props
    const url =   `https://robohash.org/${name}`
    return(

            <>
                <Image priority src={url} alt={'robotInfo'} width={400} height={200}/>
                <h3 className={'flex justify-center items-center'}>{name}</h3>
                <h4 className={'flex justify-center items-center'}>{email}</h4>
            </>

    )
}

export default Card;