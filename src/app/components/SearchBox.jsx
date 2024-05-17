'use client'
const SearchBox = ({onSearchChange, SearchField}) => {



    return(
        <>
            <div className={'flex items-center justify-center mx-auto p-4 m-0.5 rounded-xl'}>
                <input type={'search'}
                       name={'robot'}
                       value={SearchField}
                       placeholder={'Search favorite Robot'}
                       className={'outline-none p-4 shadow-amber-600'}
                       onChange={onSearchChange}
                />
            </div>


        </>
    )
}

export default SearchBox;