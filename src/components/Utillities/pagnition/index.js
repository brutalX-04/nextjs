const Pagnition = ({page,lastPage,setpage}) => {

    const scrolTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleNextPage = () => {
        setpage((prevState) => prevState + 1)
        scrolTop()
    }

    const handlePrevPage = () => {
        setpage((prevState) => prevState - 1)
        scrolTop()
    }

    return (
        <>
            <div className="flex justify-center gap-4 p-4">
                {page <= 1 ? null :
                    <button 
                    className="transition-all hover:text-color-accent" 
                    onClick={handlePrevPage}
                    >Prev</button>
                }
                <p>{page} to {lastPage}</p>
                {page >= lastPage ? null : 
                    <button
                    className="transition-all hover:text-color-accent"
                    onClick={handleNextPage}
                    >Next</button>
                }
            </div>
        </>
    )
}

export default Pagnition