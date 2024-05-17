'use client'
const SearchBox = ({onSearchChange, SearchField}) => {



    return(
            <section className={'items-center justify-center py-1.5 px-3  bg-gradient-to-r from-white to-transparent z-50 w-full static mx-auto overflow-y-hidden'}>

                <div
                    className={'bg-gradient-to-bl from-indigo-600 to-indigo-400 text-white flex items-center justify-center font-sans mx-auto p-4 m-0.5  rounded-xl font-bold text-4xl lg:text-6xl '}>ROBOTS~TREND
                </div>

                <div className={'flex items-center justify-center mx-auto p-4 m-0.5 rounded-xl'}>
                    <input type={'search'}
                           name={'robot'}
                           value={SearchField}
                           placeholder={'Search favorite Robot'}
                           className={'outline-none p-4  rounded-2xl '}

                           onChange={onSearchChange}
                    />
                </div>

            </section>



    )
}

export default SearchBox;