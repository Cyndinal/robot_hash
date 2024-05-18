'use client'
const SearchBox = ({onSearchChange, SearchField}) => {



    return(
            <header className={'sticky top-0  items-center justify-center py-1.5 px-3 bg-gradient-to-r from-green-300 to-green-300 z-50 max-w-full  mx-auto '}>
                <div
                    className={'bg-gradient-to-bl from-indigo-600 to-indigo-400 text-white flex items-center justify-center font-sans mx-auto p-4 m-0.5  rounded-xl font-bold text-4xl lg:text-6xl '}>
                    ROBOTS<span className={'text-red-600'}>~</span>TREND
                </div>

                <div className={'flex items-center justify-center mx-auto p-4 m-0.5 rounded-xl'}>
                    <input type={'search'}
                           name={'robot'}
                           value={SearchField}
                           placeholder={'Search favorite Robot'}
                           className={'outline-none p-4 rounded-2xl '}
                           onChange={onSearchChange}
                    />
                </div>


            </header>



    )
}

export default SearchBox;